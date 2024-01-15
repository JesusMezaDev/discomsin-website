export interface CatalogImages {
    public_id:  string;
    format:     string;
    folder:     string;
    url:        string;
    secure_url: string;
    info?:      Info;
}

export interface Info {
    title:         string;
    description:   string;
}