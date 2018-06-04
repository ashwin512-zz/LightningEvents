<aura:application >
    <aura:handler name="evCmp" event="c:ETLC_EV_ComponentEvent" action="{!c.evAction}" />
    <aura:handler event="c:ETLC_EV_ApplicationEvent" action="{!c.evAction}" />
    
    <div>
        <div class="padded" style="background-color: #203864;">
            <div style="color:#F0F0F0">Application</div>
            <c:ETLC_EV_TopRow />
            <c:ETLC_EV_BottomRow />
        </div>
    </div>
</aura:application>