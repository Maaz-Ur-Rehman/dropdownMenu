

let mobiles = {
    iphone: {
        v14pro: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "140,000",

        },
        v13: {
            Ram: '3GB',
            Rom: "64GB",
            Price: "120,000",
        },
        v12: {
            Ram: '3GB',
            Rom: "32GB",
            Price: "100,000",
        }
    },
    samsung: {
        s14: {
            Ram: '8GB',
            Rom: "64GB",
            Price: "100,000",
        },
        s13: {
            Ram: '6GB',
            Rom: "64GB",
            Price: "90,000",
        },
        s12: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "80,000",
        },
        s11: {
            Ram: '4GB',
            Rom: "32GB",
            Price: "70,000",
        }
    },
    Xiomi: {
        x14: {
            Ram: '6GB',
            Rom: "64GB",
            Price: "70,000",
        },
        x13: {
            Ram: '6GB',
            Rom: "32GB",
            Price: "60,000",
        },
        x12: {
            Ram: '4GB',
            Rom: "32GB",
            Price: "50,000",
        }
    }
}


let keys = Object.keys(mobiles);

let mobileName=document.getElementById('mobileName')
let mobileModel=document.getElementById('mobileModel')

function display(mobileData){
    let mobileDataShow=""

    mobileData.forEach(element => {

        mobileDataShow+=`<option value=${element}>${element}</option>`
    });

    mobileName.innerHTML=mobileDataShow


}
function clickItem(){

    mobileModel.disabled=false
    let mobileModelData=Object.keys(mobiles[mobileName.value])
    console.log(mobileModelData)
    let mobileDataShow=""

    mobileModelData.forEach(element => {

        mobileDataShow+=`<option value=${element}>${element}</option>`
    });

    mobileModel.innerHTML=mobileDataShow

    

    

}

display(keys)



function search(){
    
    let resultToDisplayModel = Object.values(mobiles[mobileName.value][mobileModel.value])
    let resultShow=""

    resultToDisplayModel.filter(function(e){

        resultShow+=`<li>${e}</li>`
    })
    document.getElementById('list').innerHTML=resultShow
}