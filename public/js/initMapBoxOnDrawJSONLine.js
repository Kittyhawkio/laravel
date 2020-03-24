

    let resStatus = 0
    // fetch( 'http://localhost:9001/api/read.php', {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     }
    // })
    //     .then(res => {
    //         resStatus = res.status
    //         return res.json()
    //     })
    //     .then(res => {
    //         switch (resStatus) {
    //             case 201:
    //                 console.log('success')
    //                 break
    //             case 400:
    //                 if (res.code === 'ValidationFailed') {
    //                     // My custom error messages from the API.
    //                     console.log(res.fieldMessages)
    //                 } else {
    //                     console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
    //                 }
    //                 break
    //             case 500:
    //                 console.log('server error, try again')
    //                 break
    //             default:
    //                 console.log('unhandled')
    //                 break
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })



let flightCoord = [
    [-122.4835292756866,37.8297123835807],[ -122.4832229881618,37.82868257836214],[ -122.4844100019022,37.8280116147407],[ -122.4856768412472,37.82881936823546],[ -122.4882640718875,37.82800535245962],[ -122.4869001503486,37.82764019185267],[ -122.4852724194374,37.82734086292055],[ -122.4870760757586,37.82665428793874],[ -122.4888461624111,37.82592783435774],[ -122.4881645727757,37.82512268641641],[ -122.487567334123,37.82412827754813],[ -122.4909346630344,37.82266604999828],[ -122.490684608367,37.82143863358433],[ -122.4880556555889,37.8218915491052],[ -122.4860677069913,37.82382383519347],[ -122.4843173795382,37.82628655530028],[ -122.4819146708237,37.82749461843864],[ -122.4811184781326,37.82903062602858],[ -122.4804334700197,37.83080300022348],[ -122.4775937679803,37.83047959863393],[ -122.4751128435436,37.83129726696102],[ -122.4740241664484,37.83108173645121],[ -122.4766407791731,37.82909708038473],[ -122.4790106648707,37.82787360805683],[ -122.4814445195217,37.82552435581263],[ -122.4862549133088,37.82121802454177],[ -122.4880632791014,37.81993718121149],[ -122.487292903523,37.81955068385337],[ -122.4851449164049,37.8190561931664],[ -122.4817374302093,37.82111351560213],[ -122.4790520652271,37.82284337886806],[ -122.4778842939715,37.82461328748681],[ -122.4764420495914,37.82610422666895],[ -122.4756849343573,37.82694456095208],[ -122.4741177892528,37.82815735241978],[ -122.4722989099978,37.82731881023303],[ -122.4720629062889,37.82576018736006],[ -122.4735207258565,37.82455558630198],[ -122.4764466510158,37.82188761659351],[ -122.4785319817687,37.82041775105488],[ -122.4810400718207,37.81799719039854],[ -122.4827651473384,37.81605309238039],[ -122.480621856124,37.81476305778882],[ -122.4780512841858,37.81473987603936],[ -122.4767948444641,37.81592799752688],[ -122.4760183817837,37.81477969639035],[ -122.4759495504829,37.81292007060455],[ -122.4767618644285,37.81231857925848],[ -122.4775894668929,37.81196137150869]
];


    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": flightCoord
                }
            }
        },
        "layout": {
        },
        "paint": {
            "line-color": "#A90202",
            "line-width": 2,
            "line-dasharray": [0, 4, 3]
        }
    });
    enableLineAnimation('route');

