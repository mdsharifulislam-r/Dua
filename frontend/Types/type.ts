export interface cat{
    cat_id:number,
    cat_name_en:string,
    no_of_subcat:number,
    no_of_dua:number
}

export interface subcat{
    subcat_id:number,
    subcat_name_bn:string,
    subcat_name_en:string,
    no_of_dua:number
}

export interface dua{
    cat_id:number,
    subcat_id:number,
    dua_id:number,
    dua_name_bn:string,
    dua_name_en:string,
    top_bn:string,
    top_en:string,
    dua_arabic:string,
    transliteration_bn:string,
    transliteration_en:string,
    translation_bn:string,
    translation_en:string,
    bottom_bn?:string
    bottom_en?:string,
    refference_bn:string,
    refference_en:string,
    audio:string
}