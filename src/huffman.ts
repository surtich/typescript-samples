import { compose, omit } from "ramda";

type Frequencies = {
  [index: string]: number;
};

type HDictionary = {
  [index: string]: string;
};

export const frequencies = (xs: string) => {
  const results: Frequencies = {};
  xs.split("").forEach(x => {
    if (x in results) {
      results[x]++;
    } else {
      results[x] = 1;
    }
  });
  return results;
};

type HTree = HLeaf | HNode;

type HLeaf = {
  value: string;
  frequency: number;
};

type HNode = {
  frequency: number;
  left: HTree;
  right: HTree;
};

export const mergeHTree = (t1: HTree, t2: HTree): HTree => ({
  frequency: t1.frequency + t2.frequency,
  left: t1,
  right: t2
});

const isLeaf = (tree: HTree): tree is HLeaf => "value" in tree;

export const toHDictionary = (
  tree: HTree,
  prefix = "",
  dictionary = {}
): HDictionary =>
  isLeaf(tree)
    ? { ...dictionary, [tree.value]: prefix }
    : {
        ...dictionary,
        ...toHDictionary(tree.left, prefix + "0", dictionary),
        ...toHDictionary(tree.right, prefix + "1", dictionary)
      };

export const Nil = Symbol();
type Nil = typeof Nil;

export type HQueue = Nil | Const;

type Const = HTree & { next: HQueue };

const createHQueue = (): HQueue => Nil;

export const addToHQueue = (tree: HTree, queue: HQueue): HQueue =>
  queue === Nil || tree.frequency < queue.frequency
    ? { ...tree, next: queue }
    : { ...queue, next: addToHQueue(tree, queue.next) };

export const mergeHQueue = (queue: HQueue): HQueue =>
  queue === Nil || queue.next === Nil
    ? queue
    : addToHQueue(
        mergeHTree(
          omit(["next"], queue) as HTree,
          omit(["next"], queue.next) as HTree
        ),
        queue.next.next
      );

export const reduceHQueue = (queue: HQueue): HQueue => {
  const nextQueue = mergeHQueue(queue);
  return queue === nextQueue ? queue : reduceHQueue(nextQueue);
};

export const toHQueue = (frequencies: Frequencies): HQueue =>
  Object.entries(frequencies).reduce(
    (queue, [value, frequency]) => addToHQueue({ value, frequency }, queue),
    createHQueue()
  );

export const compress = (xs: string): { code: string; queue: HQueue } => {
  const queue = compose(
    reduceHQueue,
    toHQueue,
    frequencies
  )(xs);

  const dictionary: {
    [index: string]: string;
  } =
    queue === Nil // empty text
      ? {}
      : isLeaf(queue) // one char text
      ? {
          [xs]: "0"
        }
      : toHDictionary(queue);

  const code = xs.split("").reduce((cs, x) => cs + dictionary[x], "");

  return {
    code,
    queue
  };
};

const decompressChar = (
  tree: HTree,
  code: string[],
  prefix = ""
): [string, string[]] => {
  if (isLeaf(tree)) {
    return [tree.value, code];
  }

  const [head, ...tail] = code;
  return decompressChar(
    head === "0" ? tree.left : tree.right,
    tail,
    prefix + head
  );
};

export const decompress = (queue: HQueue, code: string) => {
  if (queue === Nil) {
    return code;
  }

  if (isLeaf(queue)) {
    return queue.value;
  }

  let text = "";
  let cs = code.split("");
  while (cs.length) {
    const [char, tailCs] = decompressChar(queue, cs);

    cs = tailCs;
    text += char;
  }
  return text;
};
