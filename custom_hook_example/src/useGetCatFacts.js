import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
    const {data:catData, refetch, isLoading: IscatLoading, error} = useQuery(["cat"], async() => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    const refectchDataFunction = () => {
        alert("Data refetched");
        refetch();
    };

    if (error) {
        return <h1>Srry, error appeared</h1>
    }
    return {catData, refectchDataFunction, IscatLoading};
};