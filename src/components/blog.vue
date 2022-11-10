<template>
  <div>
  <div>
 <div class="aham">
<div id="inner-nav-bar" class="mx-auto max-w-screen-2xl select-none">
<div class="h-12">
<div class="flex h-full items-center justify-between">
<div class="flex cursor-pointer items-center pl-4 laptop:pl-8">
<div>
<img class="h-6 object-contain" src="@/assets/images/ic_courses.png" alt="content home">
</div> 
<div class="ml-6 hidden w-[36rem] flex-grow tab:block">
<div class="items-center rounded border border-gray-disabled shadow-sm">
<div class="relative"> 
<div class="relative flex w-full flex-row">
<button v-on:click="showModalTwo=true"  class="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
<div class="text-xs font-medium text-gray-subtitle">
<span class="font-en">
All
</span>
</div>
 <div class="px-3 text-slate-500">
 <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" class="fill-current">
 <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z">
 </path>
 </svg>
 </div>
 </button>
  <input type="search" class="h-9 w-full border-0 text-gray-title caret-brand-600 focus:ring-0" placeholder=" Search for courses">
   <button class="items-end rounded-r bg-brand-200 fill-current py-1 px-2 text-slate-700">
   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
   <path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z">
   </path>
   </svg>
   </button> 
   </div>
   </div>
   </div>
   </div>
   </div> 
    <div class="flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-8">
    <div class="cursor-pointer tab:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current">
    <path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z">
    </path>
    </svg>
    </div>
     <div class="whitespace-nowrap py-4 text-sm">
     <div class="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-solid btn-sm svelte-5g42hi">
<span class="font-en">
Login
</span>
</div>
</div>
</div>
</div>
 </div>
 </div>
 <div class="modal_backdrop" v-if="showModalTwo">
              <div class="customModal">
                <div class="customModalTitle custom-bg">
                  <button
                    class="close"
                    @click.prevent="showModalTwo = !showModalTwo"
                  >
                    &times;
                  </button>
                 
                </div>
                
                <div class="customModalBody p-3 flex " @mouseleave="showModalTwo = !showModalTwo">
             <ul class="flex cursor-pointer column items-left " >
             <li class="hvr p-2" v-for="(data,index) in getsearchcourse[0]" :key="index">
              <div class="flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4 hover:rounded hover:bg-slate-100 laptop:min-w-[270px] ">
                <div class="whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base" @mouseover="mouseover(data.name.english)">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
                 <div v-if="data.hasChildren">
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" class="fill-current"><path fill-rule="evenodd" d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"></path></svg>
              </div></div>
             </li>
             </ul>
             <ul class="flex cursor-pointer column items-left hscroll" >
             <li class=""  v-if="indexshowdata=='Vedant - Upanishads'" >
              <div class="whitespace-nowrap hvr p-2 pr-2 text-sm laptop:pr-6 laptop:text-base" v-for="(data,index) in getsearchcourse[1].slice(0,5)" :key="index">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
             </li>
             <li class="" v-if="indexshowdata=='Other Scriptures'">
              <div class="whitespace-nowrap hvr p-2 pr-2 text-sm laptop:pr-6 laptop:text-base" v-for="(data,index) in getsearchcourse[1].slice(5,25)" :key="index">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
             </li>
             <li class="" v-if="indexshowdata=='Saints and Masters'">
              <div class="whitespace-nowrap hvr p-2 pr-2 text-sm laptop:pr-6 laptop:text-base" v-for="(data,index) in getsearchcourse[1].slice(25,46)" :key="index">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
             </li>
             <li class="" v-if="indexshowdata=='Other streams'">
              <div class="whitespace-nowrap hvr p-2 pr-2 text-sm laptop:pr-6 laptop:text-base" v-for="(data,index) in getsearchcourse[1].slice(46,53)" :key="index">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
             </li>
             <li class="" v-if="indexshowdata=='Life Questions'">
              <div class="whitespace-nowrap hvr p-2 pr-2 text-sm laptop:pr-6 laptop:text-base" v-for="(data,index) in getsearchcourse[1].slice(53,63)" :key="index">
                  <span class="font-en"> {{data.name.english}}</span>
                </div>
             </li>
            
             </ul>
                </div>



              </div>
            </div>
  </div>










 </div>








    <div class="hidden px-4 pt-4 tab:block laptop:px-8">
      <div
        class="
          flex
          w-full
          flex-wrap
          items-baseline
          justify-start
          text-gray-subtitle
        "
      >
        <div class="mr-1 text-sm cursor-pointer hover:text-brand-600">
          <span class="font-en">Home</span>
        </div>
        <div class="mr-1 px-1 text-gray-subtitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            class="fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
            ></path>
          </svg>
        </div>
        <div class="mr-1 text-sm font-medium">
          <span class="font-hi">{{bannerdata.title}}</span>
        </div>
        <div class="mr-1 px-1 text-gray-subtitle hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            class="fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex items-center px-4 py-2 tab:py-4 tab:pt-4 laptop:px-8">
      <div
        class="
          -ml-4
          cursor-pointer
          rounded
          fill-current
          p-4
          text-brand-600
          hover:text-brand-400
          tab:hidden
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
          viewBox="0 0 15 13"
        >
          <path
            fill-rule="evenodd"
            d="M7.244 12.249a.888.888 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.888.888 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212Z"
          ></path>
        </svg>
      </div>
      <div
        class="
          text-lg
          font-semibold
          text-gray-title
          tab:text-xl
          laptop:text-2xl
        "
      >
        <span class="font-hi">{{bannerdata.title}}</span>
      </div>
    </div>
    <div class="px-4 laptop:px-8">
      <div class="flex flex-col tab:flex-row tab:items-start">
        <div class="w-full shrink-0 tab:w-2/5">
          <div class="aspect-[16/9] w-full">
            <div class="relative h-full w-full overflow-hidden rounded">
              <img
                class="h-full w-full object-cover"
				:src="
                        bannerdata.thumbnail.domain +
                        `/` +
                        bannerdata.thumbnail.basePath +
                        `/` +
                        bannerdata.thumbnail.qualities[0] +
                        `/` +
                        bannerdata.thumbnail.key
                      "
                alt="Thumbnail"
              />
              <div
                class="
                  absolute
                  left-0
                  bottom-0
                  h-1/3
                  w-full
                  bg-gradient-to-t
                  from-black
                  align-bottom
                  text-base
                  font-semibold
                  text-white
                "
              ></div>
              <img class=" absolute right-1 bottom-1 object-contain logo-height-lg svelte-cz7db6 " style=" width:100px; " src="@/assets/images/logo.png" alt="AP Name Logo" />
            </div>
          </div>
          <div class="hidden pt-4 tab:block">
            <div class="flex flex-col items-center tab:items-start">
              <div class="pb-3 text-sm font-medium text-gray-title tab:pb-1">
                <span class="font-en">Share this series</span
                ><span class="invisible tab:visible">:</span>
              </div>
              <div class="w-full px-8 tab:px-0">
                <div
                  class="flex w-full justify-center space-x-4 tab:justify-start"
                >
                  <div class="share-icon svelte-r6rw6p">
                    <a
                      href="https://wa.me/?text=undefined%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
                      data-action="share/whatsapp/share"
                      target="_blank"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-current"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm.98 4.577a9.708 9.708 0 0 0-8.417 14.5L6.71 24.615l5.1-1.413.292.143a9.708 9.708 0 0 0 13.84-8.745c0-5.284-4.178-9.523-9.462-9.523Zm.026 1.807c4.178 0 7.742 3.256 7.742 7.803 0 4.424-3.564 8.049-7.926 8.11-2.52 0-4.424-1.352-4.424-1.352l-3.01.799.737-2.95c-.083-.131-1.229-1.986-1.229-4.3 0-4.424 3.625-8.11 8.11-8.11Zm-2.944 3.413-.092.002h-.492l-.052.003c-.132.015-.347.09-.562.304-1.352 1.352-.799 3.257.184 4.486.184.245 1.413 2.457 4.055 3.624 1.966.86 2.396.738 2.95.615.675-.062 1.35-.615 1.658-1.167.061-.185.369-.984.123-1.106l-2.15-1.045-.062-.038c-.164-.095-.328-.119-.491.1l-.738.983-.066.043c-.15.092-.272.126-.487.018-.921-.491-2.212-1.044-3.317-2.888-.062-.245.061-.368.184-.491l.553-.86.042-.053c.063-.105.01-.21-.042-.316l-.737-1.782-.047-.111c-.138-.303-.276-.324-.414-.321Z"
                        ></path></svg
                    ></a>
                  </div>
                  <div class="share-icon svelte-r6rw6p">
                    <a
                      href="http://twitter.com/share?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0Aundefined&amp;hashtags=AcharyaPrashant,courses,wisdom,spirituality"
                      target="_blank"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-current"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm4.223 8.2c-2.17 0-3.93 1.667-3.93 3.724 0 .273.03.54.09.796-3.221-.198-6.078-1.66-8.025-3.865a3.468 3.468 0 0 0-.541 1.86c0 1.31.733 2.457 1.83 3.095a3.974 3.974 0 0 1-1.83-.47v.083c0 1.81 1.398 3.309 3.227 3.583a4.022 4.022 0 0 1-1.873.118c.493 1.464 1.94 2.525 3.684 2.525a8.351 8.351 0 0 1-4.912 1.573c-.32 0-.634-.017-.943-.051a11.5 11.5 0 0 0 6.048 1.696c6.133 0 11.105-4.71 11.105-10.52v-.158l.001-.105v-.242a6.335 6.335 0 0 0 1.913-1.896 6.898 6.898 0 0 1-2.202.572 3.55 3.55 0 0 0 1.673-2.033 6.399 6.399 0 0 1-2.44.898A4.024 4.024 0 0 0 19.722 8.7Z"
                        ></path></svg
                    ></a>
                  </div>
                  <div class="share-icon svelte-r6rw6p">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="31"
                        viewBox="0 0 32 31"
                        class="fill-current"
                      >
                        <path
                          d="M16 .5C7.44.5.5 7.244.5 15.563c0 7.46 5.588 13.64 12.915 14.836V18.705h-3.74v-4.208h3.74v-3.103c0-3.6 2.263-5.562 5.568-5.562 1.583 0 2.944.114 3.339.165V9.76l-2.293.001c-1.797 0-2.143.83-2.143 2.048v2.686h4.288l-.56 4.208h-3.728V30.5c7.668-.907 13.614-7.243 13.614-14.942C31.5 7.244 24.56.5 16 .5Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="share-icon svelte-r6rw6p">
                    <a
                      href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3"
                      target="_blank"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        class="fill-current"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm-4.868 11.036h-3.59V23.5h3.59V11.536Zm9.93-.335c-1.579 0-2.775.574-3.421 1.46v-1.125h-3.59V23.5h3.59v-6.533c0-1.699.91-2.464 2.225-2.464 1.149 0 2.082.694 2.082 2.177v6.82h3.59v-7.346c0-3.23-2.058-4.953-4.475-4.953ZM8.839 6.175A2.176 2.176 0 0 0 6.684 8.33c0 1.173.981 2.154 2.154 2.154a2.176 2.176 0 0 0 2.153-2.154 2.176 2.176 0 0 0-2.153-2.154Z"
                        ></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            flex flex-col
            self-stretch
            pt-4
            text-sm
            tab:pl-4 tab:pt-0
            laptop:text-lg
          "
        >
          <div class="text-lg font-medium text-gray-title laptop:text-xl">
            <span class="font-hi">{{bannerdata.subtitle}}</span>
          </div>
          <div class="text-justify text-base text-gray-subtitle tab:pr-4">
            <div class="hidden tab:block">
              <span class="font-hi"
                >{{bannerdata.description}}</span
              >
            </div>
            <div class="tab:hidden">
              <span class="font-hi"
                >जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना
                को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को
                शीतलता प्रदान की है और सामाजिक...</span
              >
              <span class="cursor-pointer text-brand-600 hover:text-brand-800"
                ><span class="font-hi">और पढ़ें</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 laptop:px-8">
      <div>
        <div
          class="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16"
        >
          <span class="font-en">Courses ({{ courselist.length }})</span>
        </div>
        <div class="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2"></div>
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        gap-x-4
        tab:grid-cols-2 tab:gap-y-4
        laptop:grid-cols-3 laptop:gap-x-8 laptop:px-4
        desk:grid-cols-4
      "
    >
      <div
        v-for="(data, index) in courselist"
        :key="index"
        class="
          group
          flex
          cursor-pointer
          flex-col
          justify-between
          space-y-2
          overflow-hidden
          px-4
          pt-4
          hover:bg-slate-100
          laptop:rounded-lg laptop:hover:shadow
        "
      >
        <div class="flex flex-col space-y-2">
          <div class="self-start pb-2">
            <div id="part-pointer" class="svelte-a2w579">
              <span class="font-hi">कोर्स {{ index + 1 }}</span
              >&nbsp;
            </div>
          </div>
          <div class="flex w-full flex-col text-left">
            <div>
              <div class="text-lg font-medium leading-normal text-gray-title">
                <span class="font-hi">{{ data.title }}</span>
              </div>
              <div
                class="
                  text-sm
                  leading-normal
                  text-gray-subtitle
                  laptop:text-base
                "
              >
                <span class="font-hi">{{ data.subtitle }}</span>
              </div>
              <div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">
                <span class="font-en">{{ data.courseHours }}hr</span>
              </div>
              <div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">
                <span class="font-en">Contribution: ₹{{ data.amount }}</span>
              </div>
            </div>
            <div class="mt-2 flex flex-wrap text-xs">
              <div class="mr-1">
                <div
                  class="
                    rounded
                    py-px
                    px-1.5
                    text-xs text-slate-700
                    bg-blue-background
                  "
                >
                  <span class="font-en">{{ data.language }}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="inline-flex items-center space-x-3 text-xs font-medium">
              <div
                class="
                  cursor-pointer
                  rounded-md
                  text-center
                  transition-colors transition
                  duration-150
                  btn-borderless btn-base
                  svelte-5g42hi
                "
              >
                <span class="font-en">ADD TO CART</span>
              </div>
              <div class="self-stretch py-2">
                <div class="h-full w-px bg-gray-separator"></div>
              </div>
              <div
                class="
                  cursor-pointer
                  rounded-md
                  text-center
                  transition-colors transition
                  duration-150
                  btn-borderless btn-base
                  svelte-5g42hi
                "
              >
                <span class="font-en">ENROL</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-2 group-hover:invisible">
          <div class="h-[0.5px] w-full bg-gray-separator"></div>
        </div>
      </div>
    </div>
    <div class="px-4 laptop:px-8">
      <div>
        <div
          class="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16"
        >
          <span class="font-en">Other Helpful Courses</span>
        </div>
        <div class="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2"></div>
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        tab:grid-cols-2 tab:gap-y-4
        laptop:gap-x-8 laptop:px-4
        desk:grid-cols-3
      "
    >
      <div
        v-for="detail in detailsdata"
        :key="detail"
        class="
          group
          flex
          cursor-pointer
          flex-col
          justify-between
          space-y-2
          overflow-hidden
          px-4
          pt-4
          hover:bg-slate-100
          laptop:rounded-lg laptop:hover:shadow
        "
      >
        <div class="flex flex-row items-start">
          <div class="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
            <div class="w-full">
              <div
                id="stacked-images-wrapper"
                class="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  svelte-1csyku9
                "
              >
                <div class="absolute inset-0 mx-2 border border-t border-white">
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="
                        detail.thumbnail.domain +
                        `/` +
                        detail.thumbnail.basePath +
                        `/` +
                        detail.thumbnail.qualities[0] +
                        `/` +
                        detail.thumbnail.key
                      "
                      alt="Thumbnail"
                    />
                    <div
                      class="
                        absolute
                        left-0
                        bottom-0
                        h-1/3
                        w-full
                        bg-gradient-to-t
                        from-black
                        align-bottom
                        text-base
                        font-semibold
                        text-white
                      "
                    ></div>
                    <img
                      class="
                        absolute
                        right-1
                        bottom-1
                        object-contain
                        logo-height-base
                        svelte-cz7db6
                      "
                      src="logo.png"
                      alt="AP Name Logo"
                    />
                  </div>
                </div>
                <div
                  class="
                    absolute
                    inset-0
                    top-1
                    mx-1
                    border border-t border-white
                  "
                >
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="
                        detail.thumbnail.domain +
                        `/` +
                        detail.thumbnail.basePath +
                        `/` +
                        detail.thumbnail.qualities[0] +
                        `/` +
                        detail.thumbnail.key
                      "
                      alt="Thumbnail"
                    />
                    <div
                      class="
                        absolute
                        left-0
                        bottom-0
                        h-1/3
                        w-full
                        bg-gradient-to-t
                        from-black
                        align-bottom
                        text-base
                        font-semibold
                        text-white
                      "
                    ></div>
                    <img
                      class="
                        absolute
                        right-1
                        bottom-1
                        object-contain
                        logo-height-base
                        svelte-cz7db6
                      "
                      src="/images/ic_apsignature_english.png"
                      alt="AP Name Logo"
                    />
                  </div>
                </div>
                <div
                  class="absolute inset-0 top-2 border border-t border-white"
                >
                  <div class="relative h-full w-full overflow-hidden rounded">
                    <img
                      class="h-full w-full object-cover"
                      :src="
                        detail.thumbnail.domain +
                        `/` +
                        detail.thumbnail.basePath +
                        `/` +
                        detail.thumbnail.qualities[0] +
                        `/` +
                        detail.thumbnail.key
                      "
                      alt="Thumbnail"
                    />
                    <div
                      class="
                        absolute
                        left-0
                        bottom-0
                        h-1/3
                        w-full
                        bg-gradient-to-t
                        from-black
                        align-bottom
                        text-base
                        font-semibold
                        text-white
                      "
                    ></div>
                    <img
                      class="
                        absolute
                        right-1
                        bottom-1
                        object-contain
                        logo-height-base
                        svelte-cz7db6
                      "
                      src="/images/ic_apsignature_english.png"
                      alt="AP Name Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                rounded
                py-px
                px-1.5
                text-xs text-slate-700
                bg-green-background
              "
            >
              <span class="font-en">Series</span>
            </div>
          </div>
          <div class="ml-4 flex flex-shrink flex-col">
            <div class="text-lg font-medium text-gray-title">
              <span class="font-en">{{ detail.title }}</span>
            </div>
            <div
              class="text-sm leading-normal text-gray-subtitle laptop:text-base"
            >
              <span class="font-en"> {{ detail.subtitle }}</span>
            </div>
            <div class="text-sm text-gray-subtitle">
              <span class="font-en">{{ detail.coursesCount }} Courses</span>
            </div>
          </div>
        </div>
        <div class="pt-2 group-hover:invisible tab:pr-4">
          <div class="h-[0.5px] w-full bg-gray-separator"></div>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-b from-slate-50 px-4 py-16 tab:px-4 laptop:px-20"
    >
      <div class="tab:flex">
        <div class="pb-10 tab:w-1/3 tab:pb-0">
          <div class="text-lg font-semibold text-gray-title">
            <span class="font-en">FAQs</span>
          </div>
          <div class="pt-1">
            <span class="font-en dynamicHTMLContainer"
              ><p>
                Can’t find the answer you’re looking for? Reach out to our
                <a target="_blank" href="/technical-support"
                  ><span style="color: #dd6b20">support</span></a
                >
                team
              </p></span
            >
          </div>
        </div>
        <div class="w-full tab:pl-24">
        <div v-for="(data,index) in getquestionans" :key="index">
          <div>
            <div class="flex items-center justify-between tab:cursor-pointer">
              <div class="pr-2 font-semibold text-gray-subtitle">
                <span class="font-hi">
                {{data.question}}
                  </span>
                 </div>
              <div class="h-3 w-3 text-slate-400 hover:text-slate-800" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  class="fill-current"
                  @click="indexclick=index"
                  v-if="indexclick!=index"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  ></path>
                </svg>
                <svg v-else  @click="indexclick=2" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" class="fill-current"><path fill-rule="evenodd" d="M10.207 6.207a1 1 0 0 1-1.414 0L5.5 2.914 2.207 6.207A1 1 0 0 1 .793 4.793l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z">
                </path>
                </svg>
              </div>
            </div>
          </div>
          <div id="markdown" class="w-full" style="" v-show="indexclick==index">
          
          <div class="tab:text-md pt-1 pr-4 leading-normal text-gray-subtitle tab:pr-8">
          <span class="font-hi dynamicHTMLContainer" v-html="data.answer">
         
          </span>
          </div>
          </div>
          <div class="my-4 h-[0.5px] justify-start bg-gray-separator">
          </div>
      
          </div>  
            </div>
          </div>
        </div>
      </div>
   

</template>
<script>
export default {
  props: {
	bannerdata:Array,
    courselist: Object,
    detailsdata: Object,
    getquestionans:Object,
    getsearchcourse:Object,
  },
  data() {
    return {
      title: "Blog",
      indexclick:2,
      showModalTwo:false,
      indexshowdata:""
    
    };
  },
  methods:{
    mouseover(getdata){
      this.indexshowdata=getdata;
    }
  }
};
</script>

<style scoped>
  .hscroll{
    height: 500px;
    overflow-y: scroll;
    width: 320px;
  }
  .column{
    flex-direction: column;
  }
  .hvr:hover{
    --tw-bg-opacity: 1;
    cursor: pointer;;
    color: rgb(234 88 12 / var(--tw-bg-opacity))!important;
    font-weight: 600;
  }
.font-en,
.text-lg {
  text-align: left;
}
.aham{
position:relative;
}
.modal_backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6) !important;
}
.m_title {
  display: flex;
  align-items: center;
  justify-content: center;
}
small,
.small {
  font-size: 75%;
  font-weight: 400;
}
.select1 {
  width: 100% !important;
  line-height: 49px;
  height: 40px;
  font-size: 15px !important;
  outline: 0;
  margin-bottom: 0 !important;
  background-color: white;
  color: gray;
}
code {
  border-radius: 0.215rem;
  padding: 0.15rem 0.3rem;
  background-color: rgba(197, 202, 233, 0.1);
  border: 1px solid #c5cae9;
  color: #254b72;
}
.w_30px {
  width: 30px;
}
.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  max-width: 800px;
}

.form-group {
  margin-bottom: 25px;
}

.customModal {
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.4);
  z-index: 1;
  background-color: #eee;

  border-radius: 5px;
  overflow: hidden;
  position: fixed;
  width: auto;
   top: 105px !important;
    left: calc(35% - 300px);
}
.customModalTitle {
  background-color: #eee;
  text-align: left;
  padding: 8px 12px;
  font-size: 1.5em;
}
.close {
  line-height: 32px;
}
.customModalBody {

  padding: 8px 12px;
  text-align: left;
  padding: 12px;
}
.customModalFooter {
  background-color: #fff;
  /* padding: 4px 12px; */
  text-align: left;
}

.bg-modal {
  background-color: #254b72 !important;
}
.aham{
position:relative;
}
</style>