import { CustomCategory } from "@/app/(client)/types";

export function buildTree(categories: CustomCategory[]): CustomCategory[] {
  const map = new Map();
  const roots: any[] = [];

  // Initialize map
  categories.forEach((cat) => {
    map.set(cat.id, { ...cat, subcategories: [] });
  });

  // Link parent → children
  categories.forEach((cat) => {
    if (cat.parent) {
      const parentId = typeof cat.parent === "object" ? cat.parent.id : cat.parent;
      map.get(parentId)?.subcategories.push(map.get(cat.id));
    } else {
      roots.push(map.get(cat.id));
    }
  });

  return roots;
}
