import aaa from "@/utils/request";
export function getBanner(id){
    return aaa({
        url:"/get-banner-list",
        method:"GET",
        data:{
            id
        }

    })
}
export function getnewList(id){
    return aaa.get("/get-news-list?page=1&page_size=2",{
    })
}