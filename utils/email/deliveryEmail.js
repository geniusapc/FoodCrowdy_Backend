const sendMail = require('./setup');
const { USER_PROFILE_LINK, SITE, SITE_LOGO } = require('../../constants');

const payload = (paymentDetails) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>FoodCrowdy | Customer Order</title>
    
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
        span.productOldPrice {
          color: #a0131c;
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
  
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
      </style>
      <style type="text/css">
        @media only screen and (min-width: 480px) {
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
        @media only screen and (max-width: 480px) {
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
        @media only screen and (max-width: 480px) {
          .menu-checkbox[type='checkbox'] ~ .inline-links {
            display: none !important;
          }
          .menu-checkbox[type='checkbox']:checked ~ .inline-links,
          .menu-checkbox[type='checkbox'] ~ .menu-trigger {
            display: block !important;
            max-width: none !important;
            max-height: none !important;
            font-size: inherit !important;
          }
          .menu-checkbox[type='checkbox'] ~ .inline-links > a {
            display: block !important;
          }
          .menu-checkbox[type='checkbox']:checked
            ~ .menu-trigger
            .menu-icon-close {
            display: block !important;
          }
          .menu-checkbox[type='checkbox']:checked
            ~ .menu-trigger
            .menu-icon-open {
            display: none !important;
          }
        }
      </style>
      <style type="text/css">
        @media only screen and (min-width: 481px) {
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
          width: 100%;
        }
        .server-box-one a,
        .server-box-two a {
          text-decoration: underline;
          color: #008080;
        }
        .server-img img {
          width: 100%;
        }
        .server-box-one a,
        .server-box-two a {
          text-decoration: underline;
          color: #008080;
        }
        .server-img img {
          width: 100%;
        }
        .server-box-one a,
        .server-box-two a {
          text-decoration: underline;
          color: #008080;
        }
      </style>
    </head>
    <body style="background-color: #ffffff">
      <div
        style="
          font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
          background-color: #ffffff;
        "
      >
        <div
          class="body-wrapper"
          style="
            font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
            padding-bottom: 20px;
            box-shadow: 0 4px 10px #ddd;
            background: #f2f2f2;
            background-color: #f2f2f2;
            margin: 0px auto;
            max-width: 600px;
            margin-bottom: 10px;
          "
        >
            <table
            
                role="presentation"
                style="background: #f2f2f2; background-color: #f2f2f2; width: 100%"
            >
            <tbody>
                <tr>
                    <td
                        style="
                        font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                        direction: ltr;
                        font-size: 0px;
                        padding: 10px 20px;
                        text-align: center;
                        " 
                    >
                        <div
                            class="pre-header"
                            style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                                height: 1px;
                                overflow: hidden;
                                margin: 0px auto;
                                max-width: 560px;
                            "
                        >
                        <table    
                            role="presentation"
                            style="width: 100%"
                        >
                            <tbody>
                                <tr>
                                <td
                                    style="
                                    font-family: Open Sans, Helvetica, Tahoma, Arial,
                                        sans-serif;
                                    direction: ltr;
                                    font-size: 0px;
                                    padding: 0px;
                                    text-align: center;
                                    "
                                    
                                >
                                    <div
                                        class="column-per-100 outlook-group-fix"
                                        style="
                                        font-family: Open Sans, Helvetica, Tahoma, Arial,
                                        sans-serif;
                                        font-size: 0px;
                                        text-align: left;
                                        direction: ltr;
                                        display: inline-block;
                                        vertical-align: top;
                                        width: 100%;
                                        "
                                    >
                                    <table
                                        role="presentation"
                                        style="vertical-align: top"
                                    >
                                        <tr>
                                        <td
                                            style="
                                            font-family: Open Sans, Helvetica, Tahoma,
                                                Arial, sans-serif;
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                            "
                                        >
                                            <div
                                                style="
                                                font-family: Open Sans, Helvetica, Tahoma,
                                                Arial, sans-serif;
                                                font-size: 1px;
                                                font-weight: 400;
                                                line-height: 0;
                                                text-align: center;
                                                color: #f2f2f2;
                                            "
                                            >
                                            Your Order!
                                            </div>
                                        </td>
                                        </tr>
                                    </table>
                                    </div>
                    
                                </td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                  <div
                    class="header"
                    style="
                      font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                      line-height: 22px;
                      padding: 15px 0;
                      margin: 0px auto;
                      max-width: 560px;
                    "
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              font-family: Open Sans, Helvetica, Tahoma, Arial,
                                sans-serif;
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                            "
                            
                          >
    
                            <div
                              class="column-per-25 outlook-group-fix"
                              style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: middle;
                                width: 100%;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: middle"
  
                              >
                                <tr>
                                  <td
                                    
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      font-size: 0px;
                                      padding: 0;
                                      word-break: break-word;
                                    "
                                  >
                                    <table
                                      
                                      
                                      role="presentation"
                                      style="
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              width: 160px;
                                            "
  
                                          >
                                            <a
                                              href=${SITE}
                                              target="_blank"
                                              style="
                                                font-family: Open Sans, Helvetica,
                                                  Tahoma, Arial, sans-serif;
                                                padding: 0 10px;
                                              "
                                            >
                                              <img
                                                alt=" FoodCrowdy"
                                                height="100"
                                                src=${SITE_LOGO}
                                                style="
                                                  border: 0;
                                                  display: block;
                                                  outline: none;
                                                  text-decoration: none;
                                                  height: auto;
                                                  width: 100%;
                                                  font-size: 13px;
                                                "
  
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                
                            <div
                              class="column-per-75 outlook-group-fix navigation-bar"
                              style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: middle;
                                width: 100%;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: middle"
  
                              >
                                <tr>
                                  <td
  
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      text-align: right;
                                      font-size: 0px;
                                      word-break: break-word;
                                    "
                                  >
                                    <div
                                      class="inline-links"
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                      "
                                    >
                    
                                      <a
                                        class="link"
                                 
                                        href=${USER_PROFILE_LINK}
                                        target="_blank"
                                        style="
                                          display: inline-block;
                                          color: #808080;
                                          font-family: Open Sans, Helvetica,
                                            Tahoma, Arial, sans-serif;
                                          font-size: 13px;
                                          font-weight: bold;
                                          line-height: 22px;
                                          text-decoration: none;
                                          text-transform: none;
                                          padding: 0 10px;
                                        "
                                      >
                                        My Account
                                      </a>
                                    
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                
                            <div
                              class="column-per-100 outlook-group-fix"
                              style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
  
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        background-color: #ffffff;
                                        border-radius: 10px;
                                        vertical-align: top;
                                        padding: 30px 25px;
                                      "
                                      
  
                                    >
                                      <table
                                        
  
                                        role="presentation"
                                        style
  
                                      >
                                        <tr>
                                          <td
  
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              font-size: 0px;
                                              padding: 0;
                                              word-break: break-word;
                                            "
                                          >
                                            <div
                                              style="
                                                font-family: Open Sans, Helvetica,
                                                  Tahoma, Arial, sans-serif;
                                                font-size: 26px;
                                                font-weight: bold;
                                                line-height: 30px;
                                                text-align: left;
                                                color: #4f4f4f;
                                              "
                                            >
                                              Your Order!
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
  
                                            class="link-wrap"
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              font-size: 0px;
                                              padding: 0;
                                              padding-bottom: 20px;
                                              word-break: break-word;
                                            "
                                          >
                                            <div
                                              style="
                                                font-family: Open Sans, Helvetica,
                                                  Tahoma, Arial, sans-serif;
                                                font-size: 16px;
                                                font-weight: 400;
                                                line-height: 25px;
                                                text-align: left;
                                                color: #4f4f4f;
                                              "
                                            >
                                              <br />
                                              Dear, ${
                                                paymentDetails.customer.name
                                              }! <br /><br />
                                              Your order number
                                              <a
                                                target="_blank"
                                                style="
                                                  font-weight: bold;
                                                  color: #008080;
                                                "
                                                href="#"
                                                >${paymentDetails.txRef}</a
                                              >
                                              registered! Check your order status
                                              at <br />
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
  
  
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              font-size: 0px;
                                              padding: 0;
                                              word-break: break-word;
                                            "
                                          >
                                            <table
                                              
                                            
                                              role="presentation"
                                              style="
                                                border-collapse: separate;
                                                line-height: 100%;
                                              "
                                            >
                                              <tr>
                                                <td
                                                  
                                                  
                                                  role="presentation"
                                                  style="
                                                    font-family: Open Sans,
                                                      Helvetica, Tahoma, Arial,
                                                      sans-serif;
                                                    border: none;
                                                    border-radius: 3px;
                                                    cursor: auto;
  
                                                    background: #e45b00;
                                                  "
  
                                                >
                                                  <a
                                                    href="https://www.foodcrowdy.com/customer/account/my-orders"
                                                    style="
                                                      display: inline-block;
                                                      background: #e45b00;
                                                      color: #ffffff;
                                                      font-family: Open Sans,
                                                        Helvetica, Tahoma, Arial,
                                                        sans-serif;
                                                      font-size: 18px;
                                                      font-weight: bold;
                                                      line-height: 120%;
                                                      margin: 0;
                                                      text-decoration: none;
                                                      text-transform: none;
                                                      padding: 10px 25px;
  
                                                      border-radius: 3px;
                                                    "
                                                    target="_blank"
                                                  >
                                                    Check Order Status
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
  
                                            class="link-wrap"
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              font-size: 0px;
                                              padding: 0;
                                              padding-bottom: 20px;
                                              word-break: break-word;
                                            "
                                          >
                                            <div
                                              style="
                                                font-family: Open Sans, Helvetica,
                                                  Tahoma, Arial, sans-serif;
                                                font-size: 16px;
                                                font-weight: 400;
                                                line-height: 25px;
                                                text-align: left;
                                                color: #4f4f4f;
                                              "
                                            >
                                              <br />
                                              If you have any questions, please,
                                              <a
                                                target="_blank"
                                                style="
                                                  font-weight: bold;
                                                  color: #008080;
                                                "
                                                href="https://www.foodcrowdy.com/contact-us"
                                                >Contact Us</a
                                              >
                                              <br />
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
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
  
                  <div
                    class="server-box-one"
                    style="
                      background-color: #fff;
                      padding: 20px 20px 20px 10px;
                      border-radius: 10px;
                      box-sizing: border-box;
                      font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                      margin: 0px auto;
                      max-width: 560px;
                      margin-bottom: 20px;
                    "
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              font-family: Open Sans, Helvetica, Tahoma, Arial,
                                sans-serif;
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                            "
                            
                          >
                            <div
                              class="column-per-100 outlook-group-fix"
                              style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: top"
  
                              >
                                <!-- after sale tips -->
                                <tr>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
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
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      line-height: 20px;
                                      color: #333;
                                      padding-left: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        font-weight: bold;
                                        margin-bottom: 8px;
                                      "
                                    >
                                      Contact Information:
                                    </div>
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>Phone:</strong> +234 8117001514<br />
                                    </div>
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>E-mail:</strong>
                                      info@foodcrowdy.com<br />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="products-list margin-bottom"
                    style="
                      padding: 10px 0;
                      background-color: #fff;
                      border-radius: 10px;
                      font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                      margin: 0px auto;
                      max-width: 560px;
                      margin-bottom: 15px;
                    "
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="width: 100%"
                    >
                      <tbody>
                      ${/* invoice.map((e) => purchasedProducts(e)) */ ''}
                            <tr>
                                  <td
  
                                    class="order-info-table"
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      font-size: 0px;
                                      padding: 10px 25px;
                                      word-break: break-word;
                                    "
                                  >
                                    <table
                                      
  
                                      
                                      style="
                                        color: #000000;
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 13px;
                                        line-height: 22px;
                                        table-layout: auto;
                                        width: 100%;
                                        border: none;
                                      "
                                    >
                                      <tr>
                                        <td
  
                                          style="
                                            font-family: Open Sans, Helvetica,
                                              Tahoma, Arial, sans-serif;
                                          "
                                        >
                                          <span
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              color: #999999;
                                            "
                                            >Order Total
                                          </span>
                                        </td>
                                        <td
  
  
                                          style="
                                            font-family: Open Sans, Helvetica,
                                              Tahoma, Arial, sans-serif;
                                          "
                                        >
                                          <span
                                            style="
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                            "
                                            >#${
                                              paymentDetails.chargedAmount
                                            }</span
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    
  
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      font-size: 0px;
                                      padding: 10px 25px;
                                      word-break: break-word;
                                    "
                                  >
                                    <table
                                      
                                      
                                      role="presentation"
                                      style="
                                        border-collapse: separate;
                                        width: 100%;
                                        line-height: 100%;
                                      "
                                    >
                                      <tr>
                                        <td
                                          
                                          
                                          role="presentation"
                                          style="
                                            font-family: Open Sans, Helvetica,
                                              Tahoma, Arial, sans-serif;
                                            border: none;
                                            border-radius: 3px;
                                            cursor: auto;
  
                                            background: #e45b00;
                                          "
  
                                        >
                                          <a
                                            href="https://www.foodcrowdy.com/customer/account/my-orders"
                                            style="
                                              display: inline-block;
                                              background: #e45b00;
                                              color: #ffffff;
                                              font-family: Open Sans, Helvetica,
                                                Tahoma, Arial, sans-serif;
                                              font-size: 18px;
                                              font-weight: bold;
                                              line-height: 36px;
                                              margin: 0;
                                              text-decoration: none;
                                              text-transform: none;
                                              padding: 0;
  
                                              border-radius: 3px;
                                            "
                                            target="_blank"
                                          >
                                            My Order Status
                                          </a>
                                        </td>
                                      </tr>
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
  
  
                  <div
                    style="
                      font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                      margin: 0px auto;
                      max-width: 560px;
                    "
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              font-family: Open Sans, Helvetica, Tahoma, Arial,
                                sans-serif;
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                            "
                            
                          >
          
                            <div
                              class="column-per-48-4 outlook-group-fix server-box-first server-box-two"
                              style="
                                min-height: 150px;
                                margin-right: 3%;
                                background-color: #fff;
                                padding: 20px 20px 20px 10px;
                                border-radius: 10px;
                                box-sizing: border-box;
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                                margin-bottom: 20px;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: top"
  
                              >
                            
                                <tr>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      width: 45px;
                                      margin-bottom: 10px;
                                      vertical-align: top;
                                    "
                                    class="server-img"
  
  
                                  >
                                    <img
                                      src="https://res.cloudinary.com/accelerar/image/upload/v1597474260/Html_Order_Image/shipping_kob4ap.png"
                                      alt="foodcrowdy"
                                      style="width: 100%; max-width: 60px"
                                    />
                                  </td>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      padding-left: 10px;
                                      line-height: 20px;
                                      color: #333;
                                    "
                                  >
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        margin-bottom: 8px;
                                        font-weight: bold;
                                      "
                                    >
                                      Shipping Method
                                    </div>
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                      "
                                    >
                                      <div
                                        style="
                                          font-family: Open Sans, Helvetica,
                                            Tahoma, Arial, sans-serif;
                                        "
                                      >
                                        O2 Ryder
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
          
                            <div
                              class="column-per-48-4 outlook-group-fix server-box-two"
                              style="
                                min-height: 150px;
                                background-color: #fff;
                                padding: 20px 20px 20px 10px;
                                border-radius: 10px;
                                box-sizing: border-box;
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                                margin-bottom: 20px;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: top"
  
                              >
                                <!-- payment -->
                                <tr>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      width: 45px;
                                      margin-bottom: 10px;
                                      vertical-align: top;
                                    "
                                    class="server-img"
  
  
                                  >
                                    <img
                                      src="https://res.cloudinary.com/accelerar/image/upload/v1597474260/Html_Order_Image/payment_oqafuo.png"
                                      alt
                                      style="width: 100%; max-width: 60px"
                                    />
                                  </td>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      line-height: 20px;
                                      color: #333;
                                      padding-left: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        font-weight: bold;
                                        margin-bottom: 8px;
                                      "
                                    >
                                      Payment Method
                                    </div>
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                      "
                                    >
                                      <div
                                        style="
                                          font-family: Open Sans, Helvetica,
                                            Tahoma, Arial, sans-serif;
                                        "
                                      >
                                        Flutter Wave 
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
              
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
  
                  <div
                    class="server-box-one"
                    style="
                      background-color: #fff;
                      padding: 20px 20px 20px 10px;
                      border-radius: 10px;
                      box-sizing: border-box;
                      font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                      margin: 0px auto;
                      max-width: 560px;
                      margin-bottom: 20px;
                    "
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              font-family: Open Sans, Helvetica, Tahoma, Arial,
                                sans-serif;
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                            "
                            
                          >
      
                            <div
                              class="column-per-100 outlook-group-fix"
                              style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                            </div>
                              <table
                                
                                
                                role="presentation"
                                style="vertical-align: top"
  
                              >
                                <!-- after sale tips -->
                                <tr>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      width: 60px;
                                      margin-bottom: 10px;
                                      vertical-align: top;
                                    "
                                    class="server-img"
  
  
                                  >
                                    <img
                                      src="https://res.cloudinary.com/accelerar/image/upload/v1597474260/Html_Order_Image/shipping-info_sfhjea.png"
                                      alt
                                      style="width: 100%; max-width: 60px"
                                    />
                                  </td>
                                  <td
                                    style="
                                      font-family: Open Sans, Helvetica, Tahoma,
                                        Arial, sans-serif;
                                      line-height: 20px;
                                      color: #333;
                                      padding-left: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        font-weight: bold;
                                        margin-bottom: 8px;
                                      "
                                    >
                                      Shipping Address:
                                    </div>
                                    <div
                                      style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                      "
                                    >
                                    
                                    </div>
                                  </td>
                                </tr>
                              </table>
  
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            
        <div class="footer-wrapper" style="margin: 0px auto; max-width: 600px">
          <table
            
            role="presentation"
            style="background-color: #ffffff; width: 100%"
  
            
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    text-align: center;
                  "
                >
                  <div
                    class="footer-information"
                    style="margin: 0px auto; max-width: 600px"
                  >
                    <table
                      
                      
                    
                      role="presentation"
                      style="background-color: #ffffff; width: 100%"
  
                      
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              direction: ltr;
                              font-size: 0px;
                              padding: 0px;
                              text-align: center;
                            "
                          >
                            <div
                              class="column-per-100 outlook-group-fix"
                              style="
                                font-size: 0px;
                                text-align: left;
                                direction: ltr;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                              "
                            >
                              <table
                                
                                
                                role="presentation"
                                style="
                                  background-color: #ffffff;
                                  vertical-align: top;
                                "
  
  
                                
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      
                                      style="
                                        font-size: 0px;
                                        padding: 10px 25px;
                                        word-break: break-word;
                                      "
                                    >
                                      <div
                                        style="
                                          font-family: OpenSans, Helvetica, Tahoma,
                                            Arial, sans-serif;
                                          font-size: 12px;
                                          font-weight: 400;
                                          line-height: 20px;
                                          text-align: center;
                                          color: #4f4f4f;
                                        "
                                      >
                                        <div>
                                          <a
                                            href="https://www.foodcrowdy.com"
                                            target="_blank"
                                            style="
                                              color: #333333;
                                              line-height: 20px;
                                              text-decoration: underline;
                                            "
                                            >Home</a
                                          >
                                          |
                                          <a
                                            href="https://www.foodcrowdy.com/customer/account/my-orders"
                                            style="
                                              color: #333333;
                                              line-height: 20px;
                                              text-decoration: underline;
                                            "
                                            >My Orders</a
                                          >
                                          |
                                          <a
                                            href="https://www.foodcrowdy.com/products/all"
                                            target="_blank"
                                            style="
                                              color: #333333;
                                              line-height: 20px;
                                              text-decoration: underline;
                                            "
                                            >Products</a
                                          >
                                          |
                                          <a
                                            href="https://www.foodcrowdy.com/contact-us"
                                            style="
                                              color: #333333;
                                              line-height: 20px;
                                              text-decoration: underline;
                                            "
                                            >Contact us</a
                                          >
                                        </div>
                                        <br />
                                        &copy; 2020 FoodCrowdy
                                        <br />
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

const sendPaymentReceipt = async ({ paymentDetails, invoice }) => {
  const mail = payload({ paymentDetails, invoice });
  const msg = {
    from: 'FoodCrowdy <info@foodcrowdy.com>',
    to: paymentDetails.customer.email,
    subject: 'Receipt (Foodcrowdy) ',
    html: `${mail}`,
  };
  await sendMail(msg);
};
module.exports = sendPaymentReceipt;

// const purchasedProducts = () => {
//   return `
//   <tr>
//   <td
//     style="
//       font-family: Open Sans, Helvetica, Tahoma, Arial,
//         sans-serif;
//       direction: ltr;
//       font-size: 0px;
//       padding: 0px;
//       text-align: center;
//     "

//   >

//     <div
//       class="column-per-100 outlook-group-fix"
//       style="
//         font-family: Open Sans, Helvetica, Tahoma, Arial,
//           sans-serif;
//         font-size: 0px;
//         text-align: left;
//         direction: ltr;
//         display: inline-block;
//         vertical-align: top;
//         width: 100%;
//       "
//     >
//       <table

//         role="presentation"
//         style="vertical-align: top"

//       >
//         <tr>
//           <td

//             class="products-list-table"
//             style="
//               font-family: Open Sans, Helvetica, Tahoma,
//                 Arial, sans-serif;
//               font-size: 0px;
//               padding: 10px 25px;
//               word-break: break-word;
//             "
//           >
//             <table

//               style="
//                 color: #999;
//                 font-family: Open Sans, Helvetica, Tahoma,
//                   Arial, sans-serif;
//                 font-size: 13px;
//                 line-height: 22px;
//                 table-layout: auto;
//                 width: 100%;
//                 border: none;
//               "
//             >
//               <tr
//                 class="products-list-header"
//                 style="
//                   border-bottom: 2px solid #d8d8d8;
//                   line-height: 30px;
//                 "
//               >
//                 <th
//                   class="image-column"

//                   style="
//                     line-height: 18px;
//                     padding-bottom: 18px;
//                     color: #333;
//                   "
//                 >
//                   Order Details
//                 </th>
//                 <th
//                   class="price-column"

//                   style="
//                     line-height: 18px;
//                     padding-bottom: 18px;
//                     color: #333;
//                   "
//                 >
//                   Order Number: ${paymentDetails.txRef}
//                 </th>
//               </tr>
//               <tr>
//                 <td
//                   class="product-img"

//                   style="
//                     font-family: Open Sans, Helvetica,
//                       Tahoma, Arial, sans-serif;
//                     vertical-align: top;
//                     line-height: 1;
//                     padding: 15px 0 20px 0;
//                     border-bottom: 1px dashed #d8d8d8;
//                     font-size: 14px;
//                   "

//                 >
//                   <a
//                     href=""
//                     style="
//                       font-family: Open Sans, Helvetica,
//                         Tahoma, Arial, sans-serif;
//                     "
//                   >
//                     <img
//                       src="https://res.cloudinary.com/accelerar/image/upload/v1597391646/v9xes5orzkwimcc9jdqj.jpg"
//                       class="products-gallery-image"
//                       style="display: block; width: 80px"
//                       alt="foodcrowdy"

//                     />
//                   </a>
//                 </td>
//                 <td

//                   style="
//                     font-family: Open Sans, Helvetica,
//                       Tahoma, Arial, sans-serif;
//                     vertical-align: top;
//                     line-height: 1;
//                     padding: 15px 0 20px 0;
//                     border-bottom: 1px dashed #d8d8d8;
//                     font-size: 14px;
//                   "

//                 >
//                   <div
//                     class="product-info"
//                     style="
//                       font-family: Open Sans, Helvetica,
//                         Tahoma, Arial, sans-serif;
//                       width: 100%;
//                       min-height: 80px;
//                       margin-bottom: 20px;
//                     "
//                   >
//                     <a
//                       href=""
//                       style="
//                         font-family: Open Sans, Helvetica,
//                           Tahoma, Arial, sans-serif;
//                         display: block;
//                         color: #333;
//                         font-weight: bold;
//                         line-height: 20px;
//                         text-decoration: none;
//                       "
//                     >
//                       Date Fruit
//                     </a>
//                     <br /><span style="color: #999"
//                       >Shipping (Within 24hrs)</span
//                     >
//                   </div>
//                   <div
//                     style="
//                       font-family: Open Sans, Helvetica,
//                         Tahoma, Arial, sans-serif;
//                     "
//                   >
//                     <span
//                       class="product-sku"
//                       style="
//                         font-family: Open Sans, Helvetica,
//                           Tahoma, Arial, sans-serif;
//                         display: inline-block;
//                         width: 55%;
//                         font-weight: bold;
//                       "
//                       >1 x 1,008.00
//                     </span>
//                     <span
//                       class="product-quantity"
//                       style="
//                         font-family: Open Sans, Helvetica,
//                           Tahoma, Arial, sans-serif;
//                         display: inline-block;
//                         width: 40%;
//                         text-align: right;
//                         font-weight: bold;
//                         color: #333;
//                       "
//                       >N1,088.00</span
//                     >
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>

//   `;
// };
