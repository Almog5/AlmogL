const UsersAr= [
{
        id: 0,
        name: "Almog Levi",
        gender: "male",
        age: 26,
        height: 172,
        location: "ISRAEL",
        hobbies: ["SPORT", "study"],
        image:"https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/10407082_992483000764366_6123077456618366708_n.jpg?_nc_cat=110&_nc_oc=AQn__KeGMBjncW3CqduBl4wSrSmdnef539S_EGgdo4BIQvTiJXjKIrDHnGqP4-gAo50&_nc_ht=scontent.fsdv3-1.fna&oh=d1a32a8c6d59662f0d935be6fb7fe0a5&oe=5E6534C2",
        premium : true
    },
{
    id: 1,
    name: "Hadar Shiftan",
    gender: "male",
    age: 27,
    height: 173,
    location: "Israel",
    hobbies: ["Sleep", "Cray"],
    image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/67640111_10211047514862773_1478559740236660736_n.jpg?_nc_cat=102&_nc_oc=AQlxkHiv2_fST-jCKCNhOTJQsE-dkd_ae0kFoZ8hLOuLbcfm9tbFIObjuTj7SS27c1U&_nc_ht=scontent.fsdv3-1.fna&oh=3b3eb166bb621d197b0e9b813b512560&oe=5E55B307",
    premium: true
},
{
    id: 2,
    name: "Yossi benayoun",
    gender: "male",
    age: 40,
    height: 170,
    location: "London",
    image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/16996042_918777551558840_5036489986867228315_n.png?_nc_cat=104&_nc_oc=AQnXiOt_InvgNES7Cuqg_UJ2mO1ivUdd7GLlhFX12gq2V-ReCk0wVNJ8cVBv-4iwxX0&_nc_ht=scontent.fsdv3-1.fna&oh=293619a51a2e1518c77d00e119d322e3&oe=5E20B1B6",
    premium: false
},
{
    id: 3,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://external.fsdv3-1.fna.fbcdn.net/safe_image.php?d=AQAVCNMXEzg74jda&url=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft65.23080-21%2F60647512_2020841078043970_5268585439668448179_n.jpg%3F_nc_cat%3D100%26_nc_oc%3DAQlYwhX4xjjjFrsWxu-YW-IyTyByeyDIsuOg3JBnb50Aj1Rl5uJyoOO_oGgu98UfwNM%26_nc_ht%3Dcdn.fbsbx.com%26oh%3De3098f13f5e34ae0b18d3b5780acfc04%26oe%3D5DBCC28E&_nc_hash=AQAjcV6RwlAf4m6g",
    premium: true
},
{
    id: 4,
    name: "Odeta Odeta",
    gender: "female",
    age: 56,
    height: 160,
    location: "Israel",
    hobbies: ["cooking", "eating"],
    image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/53884395_1952248174884434_1505455121796956160_n.jpg?_nc_cat=110&_nc_oc=AQnOm_v9ngfvCBCIHRV1hKNbP60c7AcLQIuD2uSX3McoQZggr97DdSyDYubpmvGnBIM&_nc_ht=scontent.fsdv3-1.fna&oh=03b6e8ee7f60cd81d24e4d5afba7686f&oe=5E1BAE6D",
    premium: true
},
{
    id: 5,
    name: "Eden Ben zaken",
    gender: "female",
    age: 25,
    height: 160,
    location: "Israel",
    image: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-1/36620557_114790696100325_7291823152470949888_n.jpg?_nc_cat=107&_nc_oc=AQlcWWx8wXxfrirdOMrwdNpcTn6-54q3U8uz2NpXG4fMiEQ-s2Mkrmh2KfzppEtERMM&_nc_ht=scontent.fsdv3-1.fna&oh=ca836b11467c4cc8f17f33136bcd1641&oe=5E56F4BC",
    premium: false
}
]
/*
{
    id: 6,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 7,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 8,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
{
    id: 9,
    name: "Beyonce knowles",
    gender: "female",
    age: 37,
    height: 167,
    location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image: "https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium: true
},
    
]
*/
