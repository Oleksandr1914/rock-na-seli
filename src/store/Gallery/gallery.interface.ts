export interface ItemImage {
  asset_id: string;
  height: number;
  secure_url: string;
  width: number;
}

export interface NetworkItem {
  asset_id: string;
  bytes: number;
  created_at: string;
  folder: string;
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  type: string;
  url: string;
  version: number;
  width: number;
}

export interface GalleryState {
  EighteenList: ItemImage[];
  NineteenthList: ItemImage[];
  TwentyFirstList: ItemImage[];
  loading: boolean;
  error: string | null;
}
