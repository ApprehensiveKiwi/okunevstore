<script>
    import IcOutlineLocalShipping from '~icons/ic/outline-local-shipping'
    import IcBaselinePhone from '~icons/ic/baseline-phone'
    import IcBaselineStore from '~icons/ic/baseline-store'
    </script>
    
    <div class="flex flex-col">
        <div class="bg-black flex flex-row text-white justify-around py-2 px-[5vw]">
            <div class="headContainer">
                <IcOutlineLocalShipping class="h-6 w-6"></IcOutlineLocalShipping>      
                Free Delivery on any order $100+
            </div>
            <div class="headContainer">
                <IcBaselineStore class="h-6 w-6"></IcBaselineStore>
                Next Day Click & Collect
            </div>
            <div class="headContainer">
                <IcBaselinePhone class="h-6 w-6"></IcBaselinePhone>
                Order by Phone
            </div>
        </div>
    </div>
    
    <style>
        .headContainer {
            display: flex;
            column-gap: 1vw;
        }
    </style>