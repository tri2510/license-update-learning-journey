'use client'

import { useEffect, useState } from 'react';
import PathList from './PathList';

const HomeContent = ({}) => { 
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchPaths = async () => {
            try {
                const response = await fetch("/api/groups")
                const data = await response.json();
                if (data && data.success) {
                    setItems(data.data)
                    console.log("data.data")
                    console.log(data.data)
                } else {
                    setItems([])
                }
            } catch (error) {
                console.log(error)
                setItems([])
            }
        }
        fetchPaths()
    }, [])

    return (
        <div className="w-full px-2 py-4" >
            <div className='text-center'>
                <div id="pathList" className="text-2x lg:text-4xl text-gray-800">Follow our <b>Paths</b></div>
                <div className="px-4 text-center text-base lg:text-xl text-gray-700 font-base mt-1"> 
                    Paths are a series of fun coding and prototyping that will help you gain new skills in SDV.
                </div>
            </div>

            {items.map((group, index) => (
                <div key={index} className="my-4">
                    <PathList paths={group.paths} title={group.name} description={group.description}/>
                </div>
            ))}
        </div>
    );
}
export default HomeContent;