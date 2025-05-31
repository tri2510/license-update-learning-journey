'use client'

import { useEffect, useState } from 'react';
import PathList from './PathList';

const HomeContent = ({ }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        onLoaded()
    }, [])

    const onLoaded = async () => {
        // Get all query fields of the current URL
        const queryParams = {};
        if (typeof window !== "undefined") {
            const searchParams = new URLSearchParams(window.location.search);
            for (const [key, value] of searchParams.entries()) {
                queryParams[key] = value;
            }
            console.log("Query Params:", queryParams);
        }

        if (queryParams.user_id) {
            await auth(queryParams.user_id, queryParams.token)
        }

        await fetchPaths()
    }

    const fetchPaths = async () => {
        try {
            const response = await fetch("/api/collections")
            const data = await response.json();
            if (data && data.success) {
                setItems(data.data)
            } else {
                setItems([])
            }
        } catch (error) {
            console.log(error)
            setItems([])
        }
    }

    const auth = async (user_id, token) => {
        try {
            await fetch(`/api/user/auth?user_id=${encodeURIComponent(user_id)}&token=${encodeURIComponent(token)}`, {
                method: "POST"
            });
        } catch (error) {
            console.log("Learning auth fail")
        }
    }

    return (
        <div className="w-full px-2 py-4" >
            <div className='text-center'>
                <div id="pathList" className="text-2x lg:text-4xl text-gray-800">Follow our <b>Paths</b></div>
                <div className="px-4 text-center text-base lg:text-xl text-gray-700 font-base mt-1">
                    Paths are a series of fun coding and prototyping that will help you gain new skills in SDV.
                </div>
            </div>

            {items.map((collection, gIndex) => (
                <div key={gIndex} className="my-4">
                    <PathList paths={collection.paths} title={collection.name} description={collection.description} titleTag={collection.titleTag} />
                </div>
            ))}
        </div>
    );
}
export default HomeContent;