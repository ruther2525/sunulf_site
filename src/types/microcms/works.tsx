export type WorksThumbnail = {
    width: number,
    height: number,
    url: string
};

export type WorksSnapshot = {
    width: number,
    height: number,
    url: string
};

export type WorkUrl = {
    fieldId: string,
    url: string
};

export type Works = {
    id: string,
    slug: string,
    name: string,
    thumb: WorksThumbnail,
    genre: string,
    tag: string[],
    credit: string,
    description: string | null,
    workUrls: WorkUrl[],
    snapshots: WorksSnapshot[],
};

export type WorksResponse = {
    contents: Works[];
    totalCount: number;
    offset: number;
    limit: number;
};