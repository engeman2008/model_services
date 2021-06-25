export declare const newModelData: {
    name: string;
    entities: {
        name: string;
        attributes: {
            name: string;
            type: string;
        }[];
    }[];
    associations: {
        name: string;
        source: string;
        target: string;
    }[];
};
export declare const deltas: ({
    op: string;
    path: string;
    value?: undefined;
} | {
    op: string;
    path: string;
    value: string;
} | {
    op: string;
    path: string;
    value: ({
        name: string;
        attributes?: undefined;
    } | {
        name: string;
        attributes: {
            name: string;
            type: string;
        }[];
    })[];
})[];
