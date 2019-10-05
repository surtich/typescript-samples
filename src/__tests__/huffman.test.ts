import {
  frequencies,
  mergeHTree,
  toHDictionary,
  addToHQueue,
  HQueue,
  Nil,
  mergeHQueue,
  reduceHQueue,
  toHQueue,
  compress,
  decompress
} from "../huffman";
import { curry, pipe } from "ramda";

const abcdText = "abcaabd";

const abcdFrequencies = {
  a: 3,
  b: 2,
  c: 1,
  d: 1
};

describe("frequencies tests", () => {
  it("if returns the char frequencies", () => {
    expect(frequencies(abcdText)).toEqual(abcdFrequencies);
  });
});

const aTree = {
  value: "a",
  frequency: 3
};
const bTree = {
  value: "b",
  frequency: 2
};
const cTree = {
  value: "c",
  frequency: 1
};
const dTree = {
  value: "d",
  frequency: 1
};

const abTree = {
  frequency: aTree.frequency + bTree.frequency,
  left: aTree,
  right: bTree
};

describe("mergeHTree tests", () => {
  it("if can merge two leafs", () => {
    expect(mergeHTree(aTree, bTree)).toEqual(abTree);
  });
});

const abcdTree = {
  frequency: 7,
  left: aTree,
  right: mergeHTree(bTree, mergeHTree(cTree, dTree))
};

const abcdDictionary = {
  a: "0",
  b: "10",
  c: "110",
  d: "111"
};

const abcdCode = "0101100010111";

describe("toHDictionary tests", () => {
  it("if dictionary is ok", () => {
    expect(toHDictionary(abcdTree)).toEqual(abcdDictionary);
  });
});

const abcdQueue: HQueue = {
  ...cTree,
  next: { ...dTree, next: { ...bTree, next: { ...aTree, next: Nil } } }
};

describe("addToHQueue tests", () => {
  it("if queue is sorted", () => {
    const add = curry(addToHQueue);

    expect(
      pipe(
        add(aTree),
        add(cTree),
        add(bTree),
        add(dTree)
      )(Nil)
    ).toEqual(abcdQueue);
  });
});

describe("mergeHQueue tests", () => {
  it("if queue is merged", () => {
    expect(mergeHQueue(abcdQueue)).toEqual({
      ...bTree,
      next: { ...mergeHTree(cTree, dTree), next: { ...aTree, next: Nil } }
    });
  });
});

const abcdReduced: HQueue = {
  ...mergeHTree(aTree, mergeHTree(bTree, mergeHTree(cTree, dTree))),
  next: Nil
};

describe("reduceHQueue tests", () => {
  it("if queue is reduced", () => {
    expect(reduceHQueue(abcdQueue)).toEqual(abcdReduced);
  });
});

describe("toHQueue tests", () => {
  it("if queue is reduced", () => {
    expect(toHQueue(abcdFrequencies)).toEqual(abcdQueue);
  });
});

describe("compress tests", () => {
  it("if compress works", () => {
    expect(compress(abcdText)).toEqual({
      queue: abcdReduced,
      code: abcdCode
    });
  });

  it("if compress works with empty text", () => {
    expect(compress("")).toEqual({
      queue: Nil,
      code: ""
    });
  });

  it("if compress works with 1 char text", () => {
    expect(compress("a")).toEqual({
      queue: { value: "a", frequency: 1, next: Nil },
      code: "0"
    });
  });
});

describe("decompress tests", () => {
  it("if decompress works with empty text", () => {
    expect(decompress(Nil, "")).toEqual("");
  });

  it("if decompress works with 1 char text", () => {
    expect(decompress({ value: "a", frequency: 1, next: Nil }, "0")).toEqual(
      "a"
    );
  });

  it("if decompress works", () => {
    expect(decompress(abcdReduced, abcdCode)).toEqual(abcdText);
  });

  it("if decompress works with a different text", () => {
    const text = "xsxqwwxcwededdnewiu";
    const { queue, code } = compress(text);
    expect(decompress(queue, code)).toEqual(text);
  });

  for (let i = 0; i < 10; i++) {
    it("if works with random texts", () => {
      const chars = ["abcdefghijklmnopqrstuvwxyz"];
      const charsLength = Math.floor(Math.random() * chars.length);
      const textLength = Math.floor(Math.random() * chars.length * 10);
      let text = "";
      for (let i = 0; i < textLength; i++) {
        text += chars[Math.random() * charsLength];
      }
      const { queue, code } = compress(text);
      expect(decompress(queue, code)).toEqual(text);
    });
  }
});
