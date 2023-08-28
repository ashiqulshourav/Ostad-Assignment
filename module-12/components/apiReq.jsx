const baseURL = "https://basic-blog.teamrabbil.com/api/";

export default async function GetAllCategories(){
    const res = await fetch(baseURL + "post-categories");
    const data = await res.json();
    return data;
}
