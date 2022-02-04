import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ChipModule} from 'primeng/chip';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SkeletonModule} from 'primeng/skeleton';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';

import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
















import {AppLoginComponent} from './pages/app.login.component';

import {CountryService} from './demo/service/countryservice';

import {EventService} from './demo/service/eventservice';
import {IconService} from './demo/service/iconservice';
import {NodeService} from './demo/service/nodeservice';
import {PhotoService} from './demo/service/photoservice';

import {MenuService} from './app.menu.service';
import { CustomerComponent } from './pages/customer.component';
import { CustomerService } from './demo/service/customerservice';
import { DroitdComponent } from './utilities/droitd/droitd.component';
import { TypeuserComponent } from './utilities/typeuser/typeuser.component';
import { TypeService } from './demo/service/typeservice';
import { RegisterComponent } from './pages/register.component';

import { AuthService } from './demo/service/auth.service';
import { SocieteserviceComponent } from './pages/societeservice/societeservice.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { SiteComponent } from './pages/site/site.component';
import { ServicesComponent } from './pages/services/services.component';
import { PretsComponent } from './pages/prets/prets.component';
import { FilialeComponent } from './pages/filiale/filiale.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { AvancesComponent } from './pages/avances/avances.component';
import { SocieteService } from './demo/service/societeservice';
import { FilialeService } from './demo/service/filialeservice';
import { SiteService } from './demo/service/siteservices';
import { ServiceService } from './demo/service/serviceservice';
import { EmployeService } from './demo/service/employeservice';
import { SocieteSService } from './demo/service/societesservice';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InfoPersonnelComponent } from './pages/employee/info/info-personnel/info-personnel.component';
import { InfoProfessionnelComponent } from './pages/employee/info/info-professionnel/info-professionnel.component';
import {CaptchaModule} from 'primeng/captcha';
import {GMapModule} from 'primeng/gmap';
import { InfoProfService } from './demo/service/infoprofservice';
import { ContratService } from './demo/service/contratservice';
import { AvanceService } from './demo/service/avanceservice';
import { PretService } from './demo/service/pretservice';
import { TypecalculComponent } from './pages/typecalcul/typecalcul.component';
import { CalculService } from './demo/service/calculservice';
import { AffecationComponent } from './pages/affecation/affecation.component';
import { AffectationService } from './demo/service/affectationservice';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SkeletonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,CommonModule,DynamicDialogModule,GMapModule,CaptchaModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
       
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppTopBarComponent,
        AppFooterComponent,
        DashboardDemoComponent,
        CustomerComponent,
        DroitdComponent,
        TypeuserComponent,
        SocieteserviceComponent,
        SocieteComponent,
        SiteComponent,ServicesComponent,PretsComponent,FilialeComponent,EmployeeComponent,ContratComponent,AvancesComponent,
        InfoPersonnelComponent,InfoProfessionnelComponent,     
       
       
     
       
  
     
 
        
      
      
       
      
       
       
       
        
 AppLoginComponent,
 RegisterComponent,
 ForbiddenComponent,
 TypecalculComponent,
 AffecationComponent,

   
       
     
       
  
     
 
        
      
      
       
      
       
       
       
        
       
       
       
       
    ],
    
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, EventService, IconService, NodeService,TypeService,
        PhotoService,CustomerService,AuthService,  MenuService,SocieteService,
        FilialeService,SiteService,ServiceService,EmployeService,SocieteSService,InfoProfService,ContratService,AvanceService,
        PretService,CalculService,AffectationService,
        
        AppMainComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
