import { useEffect, useState } from 'react';

function useGeoLocation() {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {
            lat: '',
            lng: '',
        },
        error: null
    });

    useEffect(() => {
        let isMounted = true;
        if ("geolocation" in navigator) {
            const successCallback = (position) => {
                if (isMounted) {
                    setLocation({
                        loaded: true,
                        coordinates: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        error: null
                    });
                }
            };

            const errorCallback = (error) => {
                if (isMounted) {
                    setLocation((prevLocation) => ({
                        ...prevLocation,
                        loaded: true,
                        error: error.message
                    }));
                }
            };

            const options = {
                // enableHighAccuracy: true,
                timeout: 5000, // 5 seconds timeout
                maximumAge: 0
            };

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
        } else {
            if (isMounted) {
                setLocation((prevLocation) => ({
                    ...prevLocation,
                    loaded: true,
                    error: "Geolocation not supported"
                }));
            }
        }

        return () => {
            isMounted = false;
        };
    }, []);

    return location;
}

export default useGeoLocation;

// import { useEffect, useState } from 'react'

// function useGeoLocation() {
//     const [location, setLocation] = useState({
//         loaded: false,
//         coordinates: {
//             lat: '',
//             lng: '',
//         }
//     })

//     const sucsess = location => {
//         setLocation({
//             loaded: true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitude,
//             }
//         })
//     }

//     const onError = error =>{
//         setLocation({
//             loaded: true,
//             error,
//         })
//     }

//     useEffect(()=>{
//         if(!("geolocation" in navigator)){
//             onError({
//                 code: 0,
//                 message: "Geolocation not supported"
//             })
//             setLocation(state=>({
//                 ...state,
//                 loaded: true,
//                 error: {
//                     code: 0,
//                     message: "Geolocation not supported"
//                 }
//             }))
//         }
//         navigator.geolocation.getCurrentPosition(sucsess,onError)
//     },[])

//     return location
// }

// export default useGeoLocation