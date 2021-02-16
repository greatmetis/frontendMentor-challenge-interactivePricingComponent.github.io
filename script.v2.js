/** Version: script.v2 */

// data from the instruction
const data = [{
    pageviews:'50K',
    price: 8
    
},{
    pageviews:'100K',
    price: 12
    
},{
    pageviews:'500K',
    price: 24
    
},{
    pageviews:'1M',
    price: 36
    
}]

const ShowPrice = function(type,discount){  
    this.type=type
    this.discount=discount
   
}
ShowPrice.prototype.changePlan= function(month){
    $('.price-range').click(()=>{
        let selection = $('.price-range').val()
        this.pageviews=data[selection].pageviews
        this.price=data[selection].price*month*this.discount
        this.sliderBgc = `linear-gradient(90deg, hsl(174, 77%, 80%) ${selection *33}% ,hsl(223, 50%, 87%) ${selection*33}%)`   
        $('.pageview-num').text(this.pageviews)
        $('.price-num').text('$'+this.price+'.00')
        $('.price-range').css("background",this.sliderBgc)
        
    })
}

ShowPrice.prototype.switch= function(){
    let currentValue =$('.price-range').val()
    let newValue= data[currentValue].price
    let switchToYear = newValue*12*this.discount
    if(this.type=='month'){
        $('.price-type').text('year')
        $('.price-num').text('$'+newValue+'.00')
    }else{
        
        $('.price-type').text('month')
        $('.price-num').text('$'+switchToYear+'.00')
    }
}

const monthlyPrice = new ShowPrice('month',1)
const yearlyPrice = new ShowPrice('year',0.75)

// change the text for discount-mark
function checkScreenSize(){
    if($(window).width()<=576){
        $('.discount-mark').text('-25%')  
    }else{
        $('.discount-mark').text('25% discount')  
    }
}

// this is the toggle to switch between yearly and monthly billing 
$('#is-yearly').click(function(){
    if ($(this).prop('checked')){ 
        checkScreenSize()
        $('.discount-mark').addClass('no-discount')
        monthlyPrice.switch()
        monthlyPrice.changePlan(1)
        
    }else{
        checkScreenSize()
        $('.discount-mark').removeClass('no-discount')
        yearlyPrice.switch()
        yearlyPrice.changePlan(12)
        
    }
    
})

yearlyPrice.changePlan(12)




