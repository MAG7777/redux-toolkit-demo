import React from "react";
import { useGetPostQuery } from '../store/apiReducer';

export default function DisplayPosts() {

    const { data, error, isLoading } = useGetPostQuery()

    if (isLoading) return <div>Loading.......</div>;
    if (error) return <div>Error:</div>;

    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </>
    )

}