<aura:application >
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <div class="info-div"> this is the text from ashwin</div>
    <button onclick="{!c.ClickAppButton}">Show from in App</button> 
    <c:NonLockerComponent />
    <c:LockerComponent />
     
</aura:application>