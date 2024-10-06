/**
 * @NApiVersion 2.1
 * @NScriptType Portlet
 */
define(['N/ui/serverWidget'],
    /**
 * @param{serverWidget} serverWidget
 */
    function (serverWidget) {
        /**
         * Defines the Portlet script trigger point.
         * @param {Object} params - The params parameter is a JavaScript object. It is automatically passed to the script entry
         *     point by NetSuite. The values for params are read-only.
         * @param {Portlet} params.portlet - The portlet object used for rendering
         * @param {string} params.column - Column index forthe portlet on the dashboard; left column (1), center column (2) or
         *     right column (3)
         * @param {string} params.entity - (For custom portlets only) references the customer ID for the selected customer
         * @since 2015.2
         */

        //Simple Form, Inline HTML, Links and Indents, Simple List
        const render = (params) => {
            var myPortletObj = params.portlet
            myPortletObj.title = 'Simple List'

            // Simple Form
            {myPortletObj.addField({
                id: 'custpage_name',
                label: 'Enter Name',
                type: serverWidget.FieldType.TEXT
            })
            myPortletObj.setSubmitButton({
                url: 'https://hsg15.github.io/lucky/',
                label: 'Save'
            })}

            // Inline HTML
            {var inlineHTMLField = myPortletObj.addField({
                id: 'divfield',
                type: 'inlinehtml',
                label: 'Test inline HTML'
            });
            inlineHTMLField.defaultValue = 
            '<div id="divfield_elem" style="border: 1px dotted black; height:150px; width:150px;">' +
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qjaY1Si6xgGYzbsrgMCnGdumxOmYMCwhzw&s" ' +
            'alt="Sample Image" style="height: 100%; width: 100%;" />' +
            '</div>' +
            '<p style="margin-top: 10px; text-align:center;">Harishankar Giri</p>'; 
            myPortletObj.addLine({
                text: 'Harishankar Giri'
            })}

            // Links and Indents
            {var inlineHTMLField = myPortletObj.addField({
                id: 'linksfield',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Links and Indents'
            });
            var linksHTML =
                '<div>' +
                '<a href="https://hsg15.github.io/lucky/" target="_blank">My Portfolio</a><br><br>' +  
                '<a href="https://www.linkedin.com/in/hsg15/" target="_blank">My LinkedIn</a><br><br>' +  
                '<a href="https://github.com/HSG15" target="_blank">My GitHub</a><br>' +
                '</div>';
            inlineHTMLField.defaultValue = linksHTML;}

            // Simple List
            {var simpleListField = myPortletObj.addField({
                id: 'simplelistfield',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Simple List'
            })
            var simpleListHTML = 
            '<ul>' +
            '<li>Item 1</li>' +   
            '<li>Item 2</li>' +   
            '<li>Item 3</li>' +  
            '</ul>';
            simpleListField.defaultValue = simpleListHTML}
        }

        return { render }

    });
