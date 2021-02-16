/** Version: script.v1 */

/* This is the original script I wrote, while through the process of learning, my skill was improving. Also,I would like to be proficient at prototyping in JS, so I challenge myself to write another version- script.v2-.*/



// this is the toggle to switch between yearly and monthly billing 
$('#is-yearly').click(function(){
    if ($(this).prop('checked')){ 
        switchToMonthly()
        $('.discount-mark').addClass('no-discount')
        
    }else{
        switchToYearly()
        $('.discount-mark').removeClass('no-discount')
         
    }
})

// data for interactive using
const data = [{
    pageviews:'50K',
    price: 8,
    id:1
},{
    pageviews:'100K',
    price: 12,
    id:2
},{
    pageviews:'500K',
    price: 24,
    id:3
},{
    pageviews:'1M',
    price: 36,
    id:4
}]

function switchToMonthly(){
    var j= $('.price-range').val()
    let temp = function(){
        const monthlyData = {pageviews:data[j].pageviews, price:data[j].price}
        $('.pageview-num').text(monthlyData.pageviews)
        $('.price-num').text(`$${monthlyData.price}.00`)
        $('.price-type').text('month')
    }
    temp()
    $('.price-range').change(function(){
        var j= $('.price-range').val()
        const monthlyData = {pageviews:data[j].pageviews, price:data[j].price}
        $('.pageview-num').text(monthlyData.pageviews)
        $('.price-num').text(`$${monthlyData.price}.00`)
        $('.price-type').text('month')
        // adjust slidebar style
    function slideBarBg(){
        let sliderBgc = `linear-gradient(90deg, hsl(174, 77%, 80%) ${j*33}% ,hsl(223, 50%, 87%) ${j*33}%)`
        $('.price-range').css("background",sliderBgc)
}
    slideBarBg()
    })
    
}
 
function switchToYearly(){
    let temp = ()=>{
        var j= $('.price-range').val()
        const yearlyData = {pageviews:data[j].pageviews, price:data[j].price*12*0.75}
    $('.pageview-num').text(yearlyData.pageviews)
    $('.price-num').text(`$${yearlyData.price}.00`)
    $('.price-type').text('year')
    }
    temp()
    $('.price-range').change(()=>{
        var j= $('.price-range').val()
        const yearlyData = {pageviews:data[j].pageviews, price:data[j].price*12*0.75}
    $('.pageview-num').text(yearlyData.pageviews)
    $('.price-num').text(`$${yearlyData.price}.00`)
    $('.price-type').text('year')
    // adjust slidebar style
    function slideBarBg(){
        let sliderBgc = `linear-gradient(90deg, hsl(174, 77%, 80%) ${j*33}% ,hsl(223, 50%, 87%) ${j*33}%)`
        $('.price-range').css("background",sliderBgc)
}
    slideBarBg()
    })
}

// call function when the page loaded
switchToYearly()
