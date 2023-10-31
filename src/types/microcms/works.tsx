export type Works = {
    id: string,
    slug: string,
    name: string,
    thumb: {
        width: number,
        height: number,
        url: string
    },
    genre: string,
    tag: string[],
    credit: string,
    description: string | null,
    workUrl: string | null,
    snapshots: Array<{
        width: number,
        height: number,
        url: string
    }>,
};

export type WorksResponse = {
    contents: Works[];
    totalCount: number;
    offset: number;
    limit: number;
};