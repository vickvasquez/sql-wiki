import type { Heading, MapDocument } from "@models/heading";

function buildItems(acc: MapDocument[], current: Heading): MapDocument[] {
  if (!hasPreviousHeadingAndHerDepthLowerThanCurrent(acc, current)) {
    return buildItemWithouChilds(acc, current);
  }

  const previosItem = addChildsToPreviousItem(acc, current);

  return buildItemWithChilds(acc, previosItem)
}

function buildItemWithouChilds(items: MapDocument[], current: Heading): MapDocument[] {
  return [
    ...items,
    {
      text: current.text,
      slug: current.slug,
      depth: current.depth,
      childs: [],
    },
  ];
}

function addChildsToPreviousItem(items: MapDocument[], current: Heading): MapDocument {
  const [previous] = items.slice(-1);

  return {
    ...previous,
    childs: [
      ...previous.childs,
      {
        text: current.text,
        slug: current.slug,
        depth: current.depth,
      },
    ],
  };
}

function buildItemWithChilds(items: MapDocument[], child: MapDocument): MapDocument[] {
  const index = items.findIndex((a) => child.slug === a.slug);

  items[index] = child

  return items
}

function hasPreviousHeadingAndHerDepthLowerThanCurrent(items: MapDocument[], current: Heading): boolean {
  const [previousHeading] = items.slice(-1);

  return previousHeading && current.depth > previousHeading.depth
}

function getItemsMapDocument(headings: Heading[]): MapDocument[] {
  return headings.reduce(buildItems, []);
}

export default getItemsMapDocument
