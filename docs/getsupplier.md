GetSupplier
Endpoint URL	https://www.yournetosite.com.au/do/WS/NetoAPI
Method	POST
XML Headers	
NETOAPI_ACTION	GetSupplier
NETOAPI_USERNAME	Your Neto Username (generate this in your Neto control panel)
NETOAPI_KEY	Your Neto API Secure Key (generate this in your Neto control panel)
JSON Headers	
NETOAPI_ACTION	GetSupplier
NETOAPI_USERNAME	Your Neto Username (generate this in your Neto control panel)
NETOAPI_KEY	Your Neto API Secure Key (generate this in your Neto control panel)
Accept	application/json
Description	Use this call to get supplier data. A successful call to GetSupplier returns the data requested.
XSD Schema	GetSupplier XSD   |   GetSupplier Response XSD
GetSupplier Post
You must specify at least one filter and one OutputSelector in your GetSupplier request. These will determine the results returned.

XML POST
<?xml version="1.0" encoding="utf-8"?>
<GetSupplier>
   <Filter> 
    <SupplierID>(String)</SupplierID>    
    <LeadTime1>(Integer)</LeadTime1>    
    <LeadTime2>(Integer)</LeadTime2>    
    <SupplierCompany>(String)</SupplierCompany>    
    <SupplierCurrencyCode>(String)</SupplierCurrencyCode>    
    <SupplierCity>(String)</SupplierCity>    
    <SupplierState>(String)</SupplierState>    
    <SupplierCountry>(String)</SupplierCountry>    
    <SupplierEmail>(String)</SupplierEmail>    
    <Page>(Integer)</Page>    
    <Limit>(Integer)</Limit>    
    <OutputSelector>ID</OutputSelector>    
    <OutputSelector>SupplierID</OutputSelector>    
    <OutputSelector>SupplierReference</OutputSelector>    
    <OutputSelector>LeadTime1</OutputSelector>    
    <OutputSelector>LeadTime2</OutputSelector>    
    <OutputSelector>SupplierCompany</OutputSelector>    
    <OutputSelector>SupplierStreet1</OutputSelector>    
    <OutputSelector>SupplierStreet2</OutputSelector>    
    <OutputSelector>SupplierCity</OutputSelector>    
    <OutputSelector>SupplierState</OutputSelector>    
    <OutputSelector>SupplierPostcode</OutputSelector>    
    <OutputSelector>SupplierCountry</OutputSelector>    
    <OutputSelector>SupplierEmail</OutputSelector>    
    <OutputSelector>SupplierPhone</OutputSelector>    
    <OutputSelector>SupplierFax</OutputSelector>    
    <OutputSelector>SupplierURL</OutputSelector>    
    <OutputSelector>ExportTemplate</OutputSelector>    
    <OutputSelector>SupplierCurrencyCode</OutputSelector>    
    <OutputSelector>AccountCode</OutputSelector>    
    <OutputSelector>FactoryStreet1</OutputSelector>    
    <OutputSelector>FactoryStreet2</OutputSelector>    
    <OutputSelector>FactoryCity</OutputSelector>    
    <OutputSelector>FactoryState</OutputSelector>    
    <OutputSelector>FactoryPostcode</OutputSelector>    
    <OutputSelector>FactoryCountry</OutputSelector>    
    <OutputSelector>SupplierNotes</OutputSelector>    
   </Filter>
</GetSupplier>
JSON POST
{
  "Filter": {
﻿    "SupplierID":["String"﻿/*, ...*/],
    "LeadTime1":["Integer"﻿/*, ...*/],
    "LeadTime2":["Integer"﻿/*, ...*/],
    "SupplierCompany":["String"﻿/*, ...*/],
    "SupplierCurrencyCode":["String"﻿/*, ...*/],
    "SupplierCity":["String"﻿/*, ...*/],
    "SupplierState":["String"﻿/*, ...*/],
    "SupplierCountry":["String"﻿/*, ...*/],
    "SupplierEmail":["String"﻿/*, ...*/],
    "Page":"Integer",
    "Limit":"Integer",
    "OutputSelector":["Enumeration"﻿/*, ...*/] 
} ﻿
}
<Filter>
Element Name	Required	Field Type / Options
SupplierID	Optional
Supports Multiple Elements	String(25)
LeadTime1	Optional
Supports Multiple Elements	Integer
LeadTime2	Optional
Supports Multiple Elements	Integer
SupplierCompany	Optional
Supports Multiple Elements	String(50)
SupplierCurrencyCode	Optional
Supports Multiple Elements	String(3)
SupplierCity	Optional
Supports Multiple Elements	String(50)
SupplierState	Optional
Supports Multiple Elements	String(50)
SupplierCountry	Optional
Supports Multiple Elements	String(2)
SupplierEmail	Optional
Supports Multiple Elements	String(50)
Page	Optional	Integer
Limit	Optional	Integer
<OutputSelector>
Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

Note: Each OutputSelector should be a separate element in your post.

OutputSelector	Enumeration (ID, SupplierID, SupplierReference, LeadTime1, LeadTime2, SupplierCompany, SupplierStreet1, SupplierStreet2, SupplierCity, SupplierState, SupplierPostcode, SupplierCountry, SupplierEmail, SupplierPhone, SupplierFax, SupplierURL, ExportTemplate, SupplierCurrencyCode, AccountCode, FactoryStreet1, FactoryStreet2, FactoryCity, FactoryState, FactoryPostcode, FactoryCountry, SupplierNotes)
GetSupplier Responses
XML Response
<?xml version="1.0" encoding="utf-8"?>
<GetSupplier>

</GetSupplier>
JSON Response
{

}