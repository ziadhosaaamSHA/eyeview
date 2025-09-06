import {  type CollectionSlug } from 'payload'
import { baseProcedure, createTRPCRouter } from '@/trpc/init';
import { buildTree } from '@/lib/buildTree';
import { CategoriesGetManyOutput } from '../types';

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        const data = await ctx.db.find({
            collection: 'categories' as CollectionSlug,
            pagination: false,
            limit: 0,
            sort: 'name',
        });
        const categoriesWithSubcategories = data.docs
            .filter((cat) => 'name' in cat && 'slug' in cat)
            .map((cat) => ({
                ...cat,
                subcategories: [],
            }));
        const tree = buildTree(categoriesWithSubcategories as CategoriesGetManyOutput);
        return tree;
    }),

});
