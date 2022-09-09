class UI {
    constructor (){
        this.body = document.querySelector('#body')
    };

    defaultOutPut(){
        this.body.innerHTML = `
          <!-- generall Wraapper -->
    <div id="gen-wrapper" class="bg-white w-10/12 mx-auto md:w-9/12 lg:w-1/2 fixed z-40 top-12 bottom-24 left-10 sm:left-16 md:left-24 lg:left-1/4 rounded-lg overflow-y-scroll">

       <div class="flex items-end justify-end self-end">
            <a class="text-dgray text-xl px-7 py-2" id="modal-cancel-sign" href="#">
              <i class="fas fa-times"></i>
           </a>
       </div>

       <h1 class="font-bold text-lg text-black px-7 py-2">
           Back this project      
       </h1>

       <p class="px-7 py-4 text-dgray text-justify text-base">
           Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
       </p>

       <!-- pledge-no-reward-cont -->
       <div class="border border-dgray px-5 mx-7 my-5 rounded-lg" id="pledge-no-reward-cont">
            <div class="py-7" id="no-reward">
                <input class="mx-2 checked:text-mcyan checked:bg-mcyan scale-150" type="radio" name="" id="radio-for-no-reward">

                <a class="text-sm font-black md:text-base" id="atag-for-no-reward" href="#">Pledge with no reward</a>

                <p class=" py-4 text-dgray text-justify text-base">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
            </div>
            
            <!-- hidden-cont-pledge-no-reward -->
             <div class="py-5 md:py-8 hidden" id="hidden-cont-pledge-no-reward">
                 <div class="h-px w-full bg-dgray"></div>

                 <h2 class="text-center text-dgray text-lg my-5"> Enter your pledge</h2>

                 <div class="md:flex md:justify-between">
                    <div class="border-2 border-dgray flex justify-center items-center px-3 rounded-full md:w-8/12">
                         <label class="text-dgray" for="input"> <i class="fas fa-dollar-sign"></i></label>
                         <input class="w-11/12 border-0 outline-0 px-2 py-4" type="number" placeholder="0.00" id="input">
                    </div>

                    <button id="no-reward-btn" class="text-white bg-mcyan w-1/2 my-4 py-3 rounded-3xl md:rounded-full md:px-7 md:py-4 md:w-1/4">Continue</button>
                 </div>
             </div>
       </div>

       <!-- bamboo-stand-modal-cont -->
       <div class="border border-dgray px-5 mx-7 my-5 rounded-lg" id="bamboo-stand-modal-cont">
           
            <div class="md:flex pt-7 pb-3">
                <div class="md:w-3/4 flex">
                    <input class="ml-2 mr-4 checked:text-mcyan checked:bg-mcyan scale-150 mt-5 md:mt-1" type="radio" name="" id="radio-for-bamboo-stand">
                
                    <div class="md:flex md:justify-between">
                        <h2 class="text-base font-bold md:mr-2">Bamboo Stand</h2>
                         <a class="text-base text-mcyan md:ml-2" id="atag-for-bamboo-stand" href="#">Pledge $25 or more</a>
                    </div>
                </div>

                 <div  class="md:w-1/4">
                     <p class="font-bold text-xl hidden md:block">101 <small class="text-xs text-dgray">left</small></p>
                </div>
            </div>
                <p class="text-dgray text-justify text-base">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                     you’ll be added to a special Backer member list.
                </p>
                <p class="font-bold text-xl my-5 md:hidden">101 <small class="text-xs text-dgray">left</small></p>

                  <!-- hidden container for bambo stand -->
             <div class="py-5 md:py-8 hidden" id="hidden-cont-bamboo-stand">
                 <div class="h-px w-full bg-dgray"></div>

                 <h2 class="text-center text-dgray text-lg my-5"> Enter your pledge</h2>

                 <div class="md:flex md:justify-between">
                    <div class="border-2 border-dgray flex justify-center items-center px-3 rounded-full md:w-8/12">
                         <label class="text-dgray" for="bamboo-input"> <i class="fas fa-dollar-sign"></i></label>
                         <input class="w-11/12 border-0 outline-0 px-2 py-4" type="number" placeholder="0.00" id="bamboo-input">
                    </div>

                    <button id="bamboo-btn" class="text-white bg-mcyan w-1/2 my-4 py-3 rounded-3xl md:rounded-full md:px-7 md:py-4 md:w-1/4">Continue</button>
                 </div>
             </div>
       </div>


       <!-- black-dition-modal-cont -->
         <div class="border border-dgray px-5 mx-7 my-5 rounded-lg" id="black-dition-modal-cont">
           
            <div class="md:flex pt-7 pb-3">
                <div class="md:w-3/4 flex">
                    <input class="ml-2 mr-4 checked:text-mcyan checked:bg-mcyan scale-150 mt-5 md:mt-1" type="radio" name="" id="radio-for-black-edition">
                
                    <div class="md:flex md:justify-between">
                        <h2 class="text-base font-bold md:mr-2">Black Edition Stand</h2>
                         <a class="text-base text-mcyan md:ml-2" id="atag-for-black-edition" href="#">Pledge $75 or more</a>
                    </div>
                </div>

                 <div  class="md:w-1/4">
                     <p class="font-bold text-xl hidden md:block">64 <small class="text-xs text-dgray">left</small></p>
                </div>
            </div>
                <p class="text-dgray text-justify text-base">
                   You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                     member list. Shipping is included.
                </p>
                <p class="font-bold text-xl my-5 md:hidden">64 <small class="text-xs text-dgray">left</small></p>

                <!-- hidden container for black edition -->
             <div class="py-5 md:py-8 hidden" id="hidden-cont-black-edition">
                 <div class="h-px w-full bg-dgray"></div>

                 <h2 class="text-center text-dgray text-lg my-5"> Enter your pledge</h2>

                 <div class="md:flex md:justify-between">
                    <div class="border-2 border-dgray flex justify-center items-center px-3 rounded-full md:w-8/12">
                         <label class="text-dgray" for="black-edition-input"> <i class="fas fa-dollar-sign"></i></label>
                         <input class="w-11/12 border-0 outline-0 px-2 py-4" type="number" placeholder="0.00" id="black-edition-input">
                    </div>

                    <button id="black-edition-btn" class="text-white bg-mcyan w-1/2 my-4 py-3 rounded-3xl md:rounded-full md:px-7 md:py-4 md:w-1/4">Continue</button>
                 </div>
             </div>
       </div>

         <!-- Mahogany Special Edition cont -->
         <div class="border border-dgray px-5 mx-7 my-5 rounded-lg" id="special-dition-modal-cont">
           
            <div class="md:flex pt-7 pb-3">
                <div class="md:w-3/4 flex">
                    <input class="ml-2 mr-4 checked:text-mcyan checked:bg-mcyan scale-150 mt-5 md:mt-1" type="radio" name="" id="radio-for-special-edition">
                
                    <div class="md:flex md:justify-between">
                        <h2 class="text-base font-bold md:mr-2">Mahogany Special Edition</h2>
                         <a class="text-base text-mcyan md:ml-2" id="atag-for-special-edition" href="#">Pledge $200 or more</a>
                    </div>
                </div>

                 <div  class="md:w-1/4">
                     <p class="font-bold text-xl hidden md:block">5 <small class="text-xs text-dgray">left</small></p>
                </div>
            </div>
                <p class="text-dgray text-justify text-base">
                   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                     to our Backer member list. Shipping is included.
                </p>
                <p class="font-bold text-xl my-5 md:hidden">5 <small class="text-xs text-dgray">left</small></p>

                <!-- hidden container for  Mahogany Special Edition -->
             <div class="py-5 md:py-8 hidden" id="hidden-cont-special-edition">
                 <div class="h-px w-full bg-dgray"></div>

                 <h2 class="text-center text-dgray text-lg my-5"> Enter your pledge</h2>

                 <div class="md:flex md:justify-between">
                    <div class="border-2 border-dgray flex justify-center items-center px-3 rounded-full md:w-8/12">
                         <label class="text-dgray" for="special-edition-input"> <i class="fas fa-dollar-sign"></i></label>
                         <input class="w-11/12 border-0 outline-0 px-2 py-4" type="number" placeholder="0.00" id="special-edition-input">
                    </div>

                    <button id="special-edition-btn" class="text-white bg-mcyan w-1/2 my-4 py-3 rounded-3xl md:rounded-full md:px-7 md:py-4 md:w-1/4">Continue</button>
                 </div>
             </div>
       </div>
    </div>

        `;
    }

    backProject(){
        this.defaultOutPut()
        
        // when you hit the cancel button
         document.querySelector("#modal-cancel-sign").addEventListener("click", () => {
             const main = document.querySelector(UISelectors.main);
             main.className =
               "bg-white w-10/12 mx-auto md:w-9/12 lg:w-1/2 relative z-0 bottom-24 rounded-xl";

             const body = document.querySelector(UISelectors.body);
             body.className = "bg-white text-base";

             const bodyNull = document.querySelector(UISelectors.bodyNull);
             bodyNull.innerHTML = "";
          });

         //    when you hit the pledge with no reward radio button
         document.getElementById('radio-for-no-reward').addEventListener('click', (e)  => {
           e.preventDefault();
           blockNoReward()

           hideBamboo()
           hideBlackEdition()
           hideSpecialEdidtion()
         })

         document.getElementById("atag-for-no-reward").addEventListener('click', (e)=> {
               e.preventDefault();
            blockNoReward()
            hideBamboo();
            hideBlackEdition();
            hideSpecialEdidtion();
        });

        //  when you hit the continue button FOR NO REWARD
         document.getElementById('no-reward-btn').addEventListener('click', (e) => {
             e.preventDefault()

             const input = document.getElementById('input')
             let re = /^([0-9])/

             if (re.test(input.value)) {
                 this.thankYou()
             } else{
                 input.parentElement.className = 'border-2 border-red flex justify-center items-center px-3 rounded-full md:w-8/12'
             }
         })

        //  EVERYTHING FOR BAMBOO STAND
          //    when you hit the pledge with bamboo radio button
         document.getElementById('radio-for-bamboo-stand').addEventListener('click', (e)  => {
           e.preventDefault();
           blockBamboo()

           hideNoReward()
           hideBlackEdition()
           hideSpecialEdidtion()
         })

           //    when you hit the pledge with bamboo h2 and the a tag
         document.getElementById('atag-for-bamboo-stand').parentElement.addEventListener('click', (e)  => {
           e.preventDefault();
           blockBamboo()

           hideNoReward()
           hideBlackEdition()
           hideSpecialEdidtion()
         })

            //  when you hit the continue button FOR BAMB00 STAND
         document.getElementById('bamboo-btn').addEventListener('click', (e) => {
             e.preventDefault()

             const input = document.getElementById('bamboo-input')
             let re = /^([2-9][0-4]$)/

             if (re.test(input.value)) {
                 this.thankYou()
             } else{
                 input.parentElement.className = 'border-2 border-red flex justify-center items-center px-3 rounded-full md:w-8/12'
             }
         })



        //  EVERYTHING FOR BLACK EDITION
          //    when you hit the pledge with BLACK EDITION radio button
         document.getElementById('radio-for-black-edition').addEventListener('click', (e)  => {
           e.preventDefault();
          blockBlackEdition()

           hideNoReward()
          hideBamboo()
           hideSpecialEdidtion()
         })

           //    when you hit the pledge with BLACK EDITION h2 and the a tag
         document.getElementById('atag-for-black-edition').parentElement.addEventListener('click', (e)  => {
           e.preventDefault();
           blockBlackEdition()

           hideNoReward()
           hideBamboo()
           hideSpecialEdidtion()
         })

            //  when you hit the continue button FOR BLACK EDITION
         document.getElementById('black-edition-btn').addEventListener('click', (e) => {
             e.preventDefault()

             const input = document.getElementById('black-edition-input')
             let re = /(^[1][0-9][0-9]$)/
             let re2 = /(^[7-9][0-9])/

             if (re.test(input.value) || re2.test(input.value)) {
               this.thankYou();
             } else {
               input.parentElement.className =
                 "border-2 border-red flex justify-center items-center px-3 rounded-full md:w-8/12";
             }
         })


           //  EVERYTHING FOR SPECIAL EDITION
          //    when you hit the pledge with BLACK EDITION radio button
         document.getElementById('radio-for-special-edition').addEventListener('click', (e)  => {
           e.preventDefault();
          blockSpecialEdidtion

           hideNoReward()
           hideBamboo()
           hideBlackEdition()
         })

           //    when you hit the pledge with SPECIAL EDITION h2 and the a tag
         document.getElementById('atag-for-special-edition').parentElement.addEventListener('click', (e)  => {
           e.preventDefault();
           blockSpecialEdidtion()

           hideNoReward()
           hideBamboo()
          hideBlackEdition()
         })

            //  when you hit the continue button FOR SPECIAL EDITION
         document.getElementById('special-edition-btn').addEventListener('click', (e) => {
             e.preventDefault()

             const input = document.getElementById('special-edition-input')
             let re = /^([2-9][0-9][0-9]$)/
             let re2 = /(^[1-9][0-9][0-9][0-9]$)/

             if (re.test(input.value) || re2.test(input.value)) {
               this.thankYou();
             } else {
               input.parentElement.className =
                 "border-2 border-red flex justify-center items-center px-3 rounded-full md:w-8/12";
             }
         })

    }

    bambooStand(){
        this.defaultOutPut()
        this.backProject()
        blockBamboo();
    }

    blackEdition(){
        this.defaultOutPut()
        this.backProject()
        blockBlackEdition()
    }

    specialEdidtion(){
        this.defaultOutPut()
        this.backProject()
        blockSpecialEdidtion()
    }

    thankYou(){
       this.body.innerHTML = `
          <div class="bg-white w-10/12 mx-auto md:w-9/12 lg:w-1/2 fixed z-40 top-12 left-10 sm:left-16 md:left-24 lg:left-1/4 rounded-lg" id="thank-you">
        <div class="py-10 text-center">
            <a class="bg-mcyan p-6 rounded-full" href="#">
                <i class="fas fa-check text-white text-xl"></i>
            </a>

           <h2 class="text-lg font-bold py-7 my-7">Thanks for your support!</h2>

          <p class="px-8 text-dgray my-5">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
               an email once our campaign is completed.
          </p>

          <button id="git-it" class="bg-mcyan text-white px-8 py-3 rounded-3xl">
             Got it!
          </button>
        </div>
    </div>
        `;

        document.getElementById('git-it').addEventListener('click', (e) => {
            e.preventDefault()
             const main = document.querySelector(UISelectors.main);
             main.className =
               "bg-white w-10/12 mx-auto md:w-9/12 lg:w-1/2 relative z-0 bottom-24 rounded-xl";

             const body = document.querySelector(UISelectors.body);
             body.className = "bg-white text-base";

             const bodyNull = document.querySelector(UISelectors.bodyNull);
             bodyNull.innerHTML = "";
        })
    }
    
}

// displaying the input of no reward block
const blockNoReward = () => {
    document.getElementById('hidden-cont-pledge-no-reward').className = 'py-5 md:py-8 block'

     document.getElementById("atag-for-no-reward").className = 'text-sm font-black md:text-basen text-mcyan';
          
    document.getElementById('pledge-no-reward-cont').className = 'border border-mcyan px-5 mx-7 my-5 rounded-lg'

    document.getElementById('atag-for-bamboo-stand').parentElement.className = 'md:flex md:justify-between'

     document.getElementById('atag-for-black-edition').parentElement.className = 'md:flex md:justify-between'

      document.getElementById('atag-for-special-edition').parentElement.className = 'md:flex md:justify-between'
}

// displaying bamboo stand input block
const blockBamboo = () => {
    document.getElementById('hidden-cont-bamboo-stand').className = 'py-5 md:py-8 block'

      document.getElementById('atag-for-bamboo-stand').parentElement.className = 'md:flex md:justify-between text-mcyan'

       document.getElementById("atag-for-no-reward").className =  "text-sm font-black md:text-basen";

        document.getElementById('atag-for-black-edition').parentElement.className = 'md:flex md:justify-between'

         document.getElementById('atag-for-special-edition').parentElement.className = 'md:flex md:justify-between'
}

// displaying black edition input block
const blockBlackEdition = () => {
    document.getElementById('hidden-cont-black-edition').className = 'py-5 md:py-8  block'

    document.getElementById('atag-for-black-edition').parentElement.className = 'md:flex md:justify-between text-mcyan'

     document.getElementById("atag-for-no-reward").className =  "text-sm font-black md:text-basen";

     document.getElementById('atag-for-bamboo-stand').parentElement.className = 'md:flex md:justify-between'

      document.getElementById('atag-for-special-edition').parentElement.className = 'md:flex md:justify-between'
}

// displaying special edition input block
const blockSpecialEdidtion = () => {
    document.getElementById('hidden-cont-special-edition').className = 'py-5 md:py-8 block'

     document.getElementById('atag-for-special-edition').parentElement.className = 'md:flex md:justify-between text-mcyan'

     document.getElementById("atag-for-no-reward").className =  "text-sm font-black md:text-basen";

     document.getElementById('atag-for-bamboo-stand').parentElement.className = 'md:flex md:justify-between'

      document.getElementById('atag-for-black-edition').parentElement.className = 'md:flex md:justify-between'
}

const hideNoReward = () => {
    document.getElementById('hidden-cont-pledge-no-reward').className = 'py-5 md:py-8 hidden'
}

const hideBamboo = () => {
    document.getElementById('hidden-cont-bamboo-stand').className = 'py-5 md:py-8 hidden'
}

const hideBlackEdition = () => {
    document.getElementById('hidden-cont-black-edition').className = 'py-5 md:py-8 hidden'
}

const hideSpecialEdidtion = () => {
    document.getElementById('hidden-cont-special-edition').className = 'py-5 md:py-8 hidden'
}