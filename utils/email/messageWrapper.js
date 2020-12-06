const { ALL_PRODUCTS_LINK, SITE } = require('../../constants');

module.exports = ({ message, title }) => {
  return `
  <!DOCTYPE html>
  <!DOCTYPE html>
<html>

<head>
    <title>${title}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        span.productOldPrice {
            color: #A0131C;
            text-decoration: line-through;
        }
        
        #outlook a {
            padding: 0;
        }
        
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table,
        td {
            border-collapse: collapse;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
    </style>
    <style type="text/css">
        @media only screen and (min-width:480px) {
            .column-per-100 {
                width: 100% !important;
                max-width: 100%;
            }
            .column-per-25 {
                width: 25% !important;
                max-width: 25%;
            }
            .column-per-75 {
                width: 75% !important;
                max-width: 75%;
            }
            .column-per-48-4 {
                width: 48.4% !important;
                max-width: 48.4%;
            }
            .column-per-50 {
                width: 50% !important;
                max-width: 50%;
            }
        }
    </style>
    <style type="text/css">
        @media only screen and (max-width:480px) {
            table.full-width-mobile {
                width: 100% !important;
            }
            td.full-width-mobile {
                width: auto !important;
            }
        }
        
        noinput.menu-checkbox {
            display: block !important;
            max-height: none !important;
            visibility: visible !important;
        }
        
        @media only screen and (max-width:480px) {
            .menu-checkbox[type="checkbox"]~.inline-links {
                display: none !important;
            }
            .menu-checkbox[type="checkbox"]:checked~.inline-links,
            .menu-checkbox[type="checkbox"]~.menu-trigger {
                display: block !important;
                max-width: none !important;
                max-height: none !important;
                font-size: inherit !important;
            }
            .menu-checkbox[type="checkbox"]~.inline-links>a {
                display: block !important;
            }
            .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-close {
                display: block !important;
            }
            .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-open {
                display: none !important;
            }
        }
    </style>
    <style type="text/css">
        @media only screen and (min-width:481px) {
            .products-list-table img {
                width: 120px !important;
                display: block;
            }
            .products-list-table .image-column {
                width: 20% !important;
            }
        }
        
        a {
            color: #000;
        }
        
        .server-img img {
            width: 100%
        }
        
        .server-box-one a,
        .server-box-two a {
            text-decoration: underline;
            color: #2E9CC3;
        }
        
        .server-img img {
            width: 100%
        }
        
        .server-box-one a,
        .server-box-two a {
            text-decoration: underline;
            color: #2E9CC3;
        }
        
        .server-img img {
            width: 100%
        }
        
        .server-box-one a,
        .server-box-two a {
            text-decoration: underline;
            color: #2E9CC3;
        }
    </style>
</head>

<body style="background-color:#FFFFFF;">
    <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #FFFFFF;">
        <div class="body-wrapper" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding-bottom: 20px; box-shadow: 0 4px 10px #ddd; background: #F2F2F2; background-color: #F2F2F2; margin: 0px auto; max-width: 600px; margin-bottom: 10px;">
            <table style="background:#F2F2F2;background-color:#F2F2F2;width:100%;">
                <tbody>
                    <tr>
                        <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 10px 20px; text-align: center;">

                            <div class="pre-header" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; height: 1px; overflow: hidden; margin: 0px auto; max-width: 560px;">
                                <table style="width:100%;">
                                    <tbody>
                                        <tr>
                                            <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">

                                                <div class="column-per-100 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                                    <table style="vertical-align:top;" width="100%">
                                                        <tr>
                                                            <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 1px; font-weight: 400; line-height: 0; text-align: center; color: #F2F2F2;">Please confirm your password request</div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="header" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; line-height: 22px; padding: 15px 0; margin: 0px auto; max-width: 560px;">
                                <table style="width:100%;">
                                    <tbody>
                                        <tr>
                                            <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">

                                                <div class="column-per-25 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: middle; width: 100%;">
                                                    <table style="vertical-align:middle;" width="100%">
                                                        <tr>
                                                            <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                <table style="border-collapse:collapse;border-spacing:0px;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;width: 160px;" width="160">
                                                                                <a href=${SITE} target="_blank" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding: 0 10px;"> <img alt="VamShop" height="auto" src="https://res.cloudinary.com/accelerar/image/upload/v1597476071/Html_Order_Image/LOGO_FOODCROWDY_pa3ciy_pdtwwa.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                                                                        width="160"> </a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>


                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
<!-- main 1 -->
                            <div class="notice-wrap margin-bottom" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; margin: 0px auto; max-width: 560px; margin-bottom: 15px;">
                              <table style="width:100%;">
                                <tbody>
                                  <tr>
                                    <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">
                                        <div class="column-per-100 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                            <table width="100%">
                                              <tbody>
                                                <tr>
                                                  <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #ffffff; border-radius: 10px; vertical-align: top; padding: 30px 25px;" bgcolor="#ffffff" valign="top">
                                                      <!-- Main-start --> 
                                                    <table role="presentation" >
                                                      <tr>
                                                        <td class="link-wrap" style=" font-size: 0px; padding: 0; padding-bottom: 20px; word-break: break-word;">                           
                                                          <div style=" font-size: 16px; font-weight: 400; line-height: 25px; text-align: left; color: #4f4f4f;">
                                                              <!-- content goes here -->
                                                   
                                                                ${message}
                                                              <!-- content goes here -->
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                      <!-- Main-end -->            
                                                      <!-- Contact-start --> <br/><br/>
                                                    <table role="presentation" style="vertical-align: top" >
                                                    <tr>
                                                      <td
                                                        style="
                                                          width: 60px;
                                                          margin-bottom: 10px;
                                                          vertical-align: top;
                                                        "
                                                        class="server-img"
                                                      >
                                                        <img
                                                          src="https://res.cloudinary.com/accelerar/image/upload/v1597474260/Html_Order_Image/contact_nks3vm.png"
                                                          alt="foodcrowdy"
                                                          style="width: 100%; max-width: 60px"
                                                        />
                                                      </td>
                                                      <td style="line-height: 20px; color: #333; padding-left: 10px;" >
                                                          <div
                                                            style="
                                                              font-size: 16px;
                                                              font-weight: bold;
                                                              margin-bottom: 8px;
                                                            "
                                                          >
                                                            Contact Information:
                                                          </div>
                                                          <div style=" font-size: 14px;">
                                                            <strong>Phone:</strong> +234 8117001514<br />
                                                          </div>
                                                          <div style="font-size: 14px;">
                                                            <strong>E-mail:</strong>  info@foodcrowdy.com<br />
                                                          </div>
                                                      </td>
                                                    </tr>
                                                    </table> 
                                                      <!-- Contact-end -->
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>    
                                        </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="footer-wrapper" style="margin: 0px auto; max-width: 600px;">
            <table style="background-color: #FFFFFF; width: 100%;" width="100%">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

                            <div class="footer-information" style="margin:0px auto;max-width:600px;">
                                <table style="background-color: #FFFFFF; width: 100%;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="direction:ltr;font-size:0px; padding:0px;text-align:center;">

                                                <div class="column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table style="background-color: #FFFFFF; vertical-align: top;" width="100%" valign="top">
                                                        <tbody>
                                                            <tr>
                                                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                    <div style="font-family:OpenSans, Helvetica, Tahoma, Arial, sans-serif;font-size:12px;font-weight:400;line-height:20px;text-align:center;color:#4F4F4F;">
                                                                      <div>
                                                                          <a href=${SITE} target="_blank" style="color: #333333; line-height: 20px; text-decoration: underline;">Home</a> |
                                                                          <a href=${ALL_PRODUCTS_LINK} target="_blank" style="color: #333333; line-height: 20px; text-decoration: underline;">Products</a>  
                                                                      </div>
                                                                      <br /> &copy; 2020 FoodCrowdy
                                                                    </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                </table>
                            </div>
                            </td>
                            </tr>
                            </tbody>
                            </table>
        </div>

        </td>
        </tr>
        </tbody>
        </table>
    </div>
    </div>
</body>
</html>
    `;
};
