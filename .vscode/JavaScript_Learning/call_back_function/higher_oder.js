        var array=[2,4,7,9,21,8]
        function square(num){
            return num*num
        }
        function cube(num){
           return num*num*num
        }
        function increment(num){
            return num+1
        }
        function anyoperater(array,operater){
            let result=[]
            for (ele of array){
                let temp=operater(ele)
                result.push(temp)
            }
            return result
        }
        console.log(array)
        let x=anyoperater(array,square)
        console.log(x)
        x=anyoperater(array,cube)
        console.log(x)
        x=anyoperater(array,increment)
        console.log(x)