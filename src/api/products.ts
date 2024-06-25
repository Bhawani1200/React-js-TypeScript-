import axios from "axios";
import config from "../config/config";
import { productQuery } from "../types/product";

const getAll = async ({
    offset=0,
    limit=10,
    filters={},
    sort={createdAt:-1}
    }: productQuery) => {
    const queryParams = `limit=${limit}&offset=${offset}&sort=${JSON.stringify(
    sort
    )}&filters=${JSON.stringify(filters)}`;
    const response = await axios.get(`${config.apiUrl}/api/products? 
    ${queryParams}`);
    return response;
};
export { getAll };
