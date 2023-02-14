import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const HOME = () => {
    
    const {data: catData, isLoading, isError, refetch} = useQuery(["cat"], () =>{
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if(isError){
        //return the message when fetching failed
        return <h1>Srr, there is an arror</h1>
    }

    if(isLoading){
         //IsLoading is a boolen to return the status when the actual data is fetching/loading
        return <h1>Loading...</h1>
    }

    

    return (    
            <h1>
                Welcome to the home page
                <p>{catData?.fact}</p>{/*Only fetch data from query if the object is not null */}

                {/* //Refetch can be used to refesh/update the data from query */}
                <button onClick={refetch}>refetch/update data</button>
            </h1>
    )
};


//Note:
//WE will apply and use React Query here in home page

//UseQuery can be specified by using 2 parameters:
//useQuery(["any_is_to_fetch_query"], a_function_uses_to_fetch_datas_from_that_query)
//By using UseQuery , we do not to create a State to fetch/get response for APIs anymore
