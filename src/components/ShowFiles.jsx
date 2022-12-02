import { useEffect, useState } from 'react';

const ShowFiles = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response);
                setUrls(data.response ? data.response : []);
            });
    }, []);

    return (
        <div>
            <h1>Here're the files you've uploaded</h1>
            <div className="container">
                {
                    urls.map(url => (
                        <div className="imgContainer">
                            <img src={url} className="imgContainer"/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default ShowFiles;
