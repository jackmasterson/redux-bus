const baseURL = process.env.REACT_APP_USER_DB;

export const getData = () => {
    return fetch(baseURL)
        .then(res => res.json());
}

export const filterData = (filter) => {
    fetch(baseURL)
        .then(res => res.json()
        .then((resTwo) => {
            let filtered = [];
            for (res of resTwo) {
                if (res.destination === filter) {
                    filtered.push(res);
                }
            }
            return filtered;
        })
    );
}

export const postData = (busInfo) => {
    console.log(busInfo);
    console.log(JSON.stringify(busInfo));
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( busInfo )
    })
    .then(res => res.json());
}