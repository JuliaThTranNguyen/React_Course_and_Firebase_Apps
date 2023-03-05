import {useGetCat} from "../useGetCatFacts";

export const Cat = () => {
    const {catData, IscatLoading,refectchDataFunction} = useGetCat();
    if (IscatLoading) {
        return <h1>loading...</h1>;
    };

    return (
        <div>
            <button onClick={refectchDataFunction}>refetch data</button>
            {/* // accessing the fact property of the catData object. THe (?.)  will check if the catData exist before accessing its "fact" property*/}
            <h1>{catData?.fact}</h1> 
        </div>
    );
};

//Note: This is a simple component to fetch "cat" APIs from that query 
//Pls remember to install: npm i axios && i @tanstack/react-query
