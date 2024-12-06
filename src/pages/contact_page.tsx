// @ts-nocheck
import { Fragment } from "react/jsx-runtime";
import "../assets/flex_center.css";
import "../assets/type_out_style.css";
import "../assets/font.css";
import resume from "../assets/Resume - Oct 9 2024.pdf";
import { GrDocumentDownload } from "react-icons/gr";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ResponsiveChoropleth } from "@nivo/geo";
import features from "../assets/world_countries.json";

function Contact() {
  const data =
    "Hi Nitin,\n\n\
  I’d love to set up a brief chat to discuss your expertise and our organization's opening.\n\
  Please let me know your availability this week.\n\
  Looking forward to connecting!\n\n\
Best, \n\
<Name>";
  const plot_data = [
    // {
    //   "id": "AFG",
    //   "value": 867870
    // },
    // {
    //   "id": "AGO",
    //   "value": 858367
    // },
    // {
    //   "id": "ALB",
    //   "value": 528420
    // },
    // {
    //   "id": "ARE",
    //   "value": 310766
    // },
    // {
    //   "id": "ARG",
    //   "value": 511758
    // },
    // {
    //   "id": "ARM",
    //   "value": 879469
    // },
    // {
    //   "id": "ATA",
    //   "value": 758233
    // },
    // {
    //   "id": "ATF",
    //   "value": 327422
    // },
    // {
    //   "id": "AUT",
    //   "value": 636380
    // },
    // {
    //   "id": "AZE",
    //   "value": 454631
    // },
    // {
    //   "id": "BDI",
    //   "value": 397848
    // },
    // {
    //   "id": "BEL",
    //   "value": 296124
    // },
    // {
    //   "id": "BEN",
    //   "value": 983986
    // },
    // {
    //   "id": "BFA",
    //   "value": 147924
    // },
    // {
    //   "id": "BGD",
    //   "value": 788972
    // },
    // {
    //   "id": "BGR",
    //   "value": 661060
    // },
    // {
    //   "id": "BHS",
    //   "value": 946486
    // },
    // {
    //   "id": "BIH",
    //   "value": 733181
    // },
    // {
    //   "id": "BLR",
    //   "value": 167732
    // },
    // {
    //   "id": "BLZ",
    //   "value": 616238
    // },
    // {
    //   "id": "BOL",
    //   "value": 350332
    // },
    // {
    //   "id": "BRN",
    //   "value": 301290
    // },
    // {
    //   "id": "BTN",
    //   "value": 946120
    // },
    // {
    //   "id": "BWA",
    //   "value": 359279
    // },
    // {
    //   "id": "CAF",
    //   "value": 129352
    // },
    // {
    //   "id": "CAN",
    //   "value": 957690
    // },
    // {
    //   "id": "CHE",
    //   "value": 921676
    // },
    // {
    //   "id": "CHL",
    //   "value": 963279
    // },
    // {
    //   "id": "CHN",
    //   "value": 997050
    // },
    // {
    //   "id": "CIV",
    //   "value": 311598
    // },
    // {
    //   "id": "CMR",
    //   "value": 639381
    // },
    // {
    //   "id": "COG",
    //   "value": 595621
    // },
    // {
    //   "id": "COL",
    //   "value": 868894
    // },
    // {
    //   "id": "CRI",
    //   "value": 601282
    // },
    // {
    //   "id": "CUB",
    //   "value": 527549
    // },
    // {
    //   "id": "-99",
    //   "value": 80327
    // },
    // {
    //   "id": "CYP",
    //   "value": 523796
    // },
    // {
    //   "id": "CZE",
    //   "value": 741746
    // },
    // {
    //   "id": "DEU",
    //   "value": 488016
    // },
    // {
    //   "id": "DJI",
    //   "value": 906022
    // },
    // {
    //   "id": "DNK",
    //   "value": 653617
    // },
    // {
    //   "id": "DOM",
    //   "value": 983330
    // },
    // {
    //   "id": "DZA",
    //   "value": 33156
    // },
    // {
    //   "id": "ECU",
    //   "value": 257401
    // },
    // {
    //   "id": "EGY",
    //   "value": 222470
    // },
    // {
    //   "id": "ERI",
    //   "value": 242399
    // },
    // {
    //   "id": "ESP",
    //   "value": 517294
    // },
    // {
    //   "id": "EST",
    //   "value": 938267
    // },
    // {
    //   "id": "ETH",
    //   "value": 535372
    // },
    // {
    //   "id": "FIN",
    //   "value": 474217
    // },
    // {
    //   "id": "FJI",
    //   "value": 240028
    // },
    // {
    //   "id": "FLK",
    //   "value": 531506
    // },
    // {
    //   "id": "FRA",
    //   "value": 169981
    // },
    // {
    //   "id": "GAB",
    //   "value": 573345
    // },
    // {
    //   "id": "GBR",
    //   "value": 340056
    // },
    // {
    //   "id": "GEO",
    //   "value": 682044
    // },
    // {
    //   "id": "GHA",
    //   "value": 205713
    // },
    // {
    //   "id": "GIN",
    //   "value": 180648
    // },
    // {
    //   "id": "GMB",
    //   "value": 144593
    // },
    // {
    //   "id": "GNB",
    //   "value": 908700
    // },
    // {
    //   "id": "GNQ",
    //   "value": 828752
    // },
    // {
    //   "id": "GRC",
    //   "value": 247990
    // },
    // {
    //   "id": "GTM",
    //   "value": 482079
    // },
    // {
    //   "id": "GUY",
    //   "value": 421817
    // },
    // {
    //   "id": "HND",
    //   "value": 253127
    // },
    // {
    //   "id": "HRV",
    //   "value": 240786
    // },
    // {
    //   "id": "HTI",
    //   "value": 755014
    // },
    // {
    //   "id": "HUN",
    //   "value": 702586
    // },
    // {
    //   "id": "IDN",
    //   "value": 286392
    // },
    {
      id: "IND",
      value: "25",
    },
    // {
    //   "id": "IRL",
    //   "value": 589453
    // },
    // {
    //   "id": "IRN",
    //   "value": 170600
    // },
    // {
    //   "id": "IRQ",
    //   "value": 747345
    // },
    // {
    //   "id": "ISL",
    //   "value": 463993
    // },
    // {
    //   "id": "ISR",
    //   "value": 177942
    // },
    // {
    //   "id": "ITA",
    //   "value": 893092
    // },
    // {
    //   "id": "JAM",
    //   "value": 399953
    // },
    // {
    //   "id": "JOR",
    //   "value": 328390
    // },
    // {
    //   "id": "JPN",
    //   "value": 250412
    // },
    // {
    //   "id": "KAZ",
    //   "value": 893115
    // },
    // {
    //   "id": "KEN",
    //   "value": 914914
    // },
    // {
    //   "id": "KGZ",
    //   "value": 9212
    // },
    // {
    //   "id": "KHM",
    //   "value": 753265
    // },
    // {
    //   "id": "OSA",
    //   "value": 554867
    // },
    // {
    //   "id": "KWT",
    //   "value": 758745
    // },
    // {
    //   "id": "LAO",
    //   "value": 288763
    // },
    // {
    //   "id": "LBN",
    //   "value": 295516
    // },
    // {
    //   "id": "LBR",
    //   "value": 533328
    // },
    // {
    //   "id": "LBY",
    //   "value": 941324
    // },
    // {
    //   "id": "LKA",
    //   "value": 860464
    // },
    // {
    //   "id": "LSO",
    //   "value": 288754
    // },
    // {
    //   "id": "LTU",
    //   "value": 36135
    // },
    // {
    //   "id": "LUX",
    //   "value": 781279
    // },
    // {
    //   "id": "LVA",
    //   "value": 532986
    // },
    // {
    //   "id": "MAR",
    //   "value": 904600
    // },
    // {
    //   "id": "MDA",
    //   "value": 172970
    // },
    // {
    //   "id": "MDG",
    //   "value": 281688
    // },
    // {
    //   "id": "MEX",
    //   "value": 946154
    // },
    // {
    //   "id": "MKD",
    //   "value": 272052
    // },
    // {
    //   "id": "MLI",
    //   "value": 393423
    // },
    // {
    //   "id": "MMR",
    //   "value": 562787
    // },
    // {
    //   "id": "MNE",
    //   "value": 930441
    // },
    // {
    //   "id": "MNG",
    //   "value": 538508
    // },
    // {
    //   "id": "MOZ",
    //   "value": 309767
    // },
    // {
    //   "id": "MRT",
    //   "value": 608171
    // },
    // {
    //   "id": "MWI",
    //   "value": 518048
    // },
    // {
    //   "id": "MYS",
    //   "value": 985988
    // },
    // {
    //   "id": "NAM",
    //   "value": 501107
    // },
    // {
    //   "id": "NCL",
    //   "value": 93923
    // },
    // {
    //   "id": "NER",
    //   "value": 213474
    // },
    // {
    //   "id": "NGA",
    //   "value": 155391
    // },
    // {
    //   "id": "NIC",
    //   "value": 148077
    // },
    // {
    //   "id": "NLD",
    //   "value": 37403
    // },
    // {
    //   "id": "NOR",
    //   "value": 35401
    // },
    // {
    //   "id": "NPL",
    //   "value": 171639
    // },
    // {
    //   "id": "NZL",
    //   "value": 397822
    // },
    // {
    //   "id": "OMN",
    //   "value": 601332
    // },
    // {
    //   "id": "PAK",
    //   "value": 930832
    // },
    // {
    //   "id": "PAN",
    //   "value": 604968
    // },
    // {
    //   "id": "PER",
    //   "value": 801122
    // },
    // {
    //   "id": "PHL",
    //   "value": 919185
    // },
    // {
    //   "id": "PNG",
    //   "value": 819766
    // },
    // {
    //   "id": "POL",
    //   "value": 226751
    // },
    // {
    //   "id": "PRI",
    //   "value": 336619
    // },
    // {
    //   "id": "PRT",
    //   "value": 84325
    // },
    // {
    //   "id": "PRY",
    //   "value": 427790
    // },
    // {
    //   "id": "QAT",
    //   "value": 283034
    // },
    // {
    //   "id": "ROU",
    //   "value": 27773
    // },
    // {
    //   "id": "RUS",
    //   "value": 998
    // },
    // {
    //   "id": "RWA",
    //   "value": 787279
    // },
    // {
    //   "id": "ESH",
    //   "value": 576960
    // },
    // {
    //   "id": "SAU",
    //   "value": 668918
    // },
    // {
    //   "id": "SDN",
    //   "value": 460987
    // },
    // {
    //   "id": "SDS",
    //   "value": 698109
    // },
    // {
    //   "id": "SEN",
    //   "value": 211530
    // },
    // {
    //   "id": "SLB",
    //   "value": 833780
    // },
    // {
    //   "id": "SLE",
    //   "value": 859747
    // },
    // {
    //   "id": "SLV",
    //   "value": 397275
    // },
    // {
    //   "id": "ABV",
    //   "value": 979140
    // },
    // {
    //   "id": "SOM",
    //   "value": 884594
    // },
    // {
    //   "id": "SRB",
    //   "value": 14864
    // },
    // {
    //   "id": "SUR",
    //   "value": 138559
    // },
    // {
    //   "id": "SVK",
    //   "value": 810072
    // },
    // {
    //   "id": "SVN",
    //   "value": 587953
    // },
    // {
    //   "id": "SWZ",
    //   "value": 334755
    // },
    // {
    //   "id": "SYR",
    //   "value": 831593
    // },
    // {
    //   "id": "TCD",
    //   "value": 55527
    // },
    // {
    //   "id": "TGO",
    //   "value": 243162
    // },
    // {
    //   "id": "THA",
    //   "value": 289046
    // },
    // {
    //   "id": "TJK",
    //   "value": 423428
    // },
    // {
    //   "id": "TKM",
    //   "value": 678247
    // },
    // {
    //   "id": "TLS",
    //   "value": 689679
    // },
    // {
    //   "id": "TTO",
    //   "value": 460089
    // },
    // {
    //   "id": "TUN",
    //   "value": 377160
    // },
    // {
    //   "id": "TUR",
    //   "value": 98168
    // },
    // {
    //   "id": "TWN",
    //   "value": 303504
    // },
    // {
    //   "id": "TZA",
    //   "value": 468748
    // },
    // {
    //   "id": "UGA",
    //   "value": 224600
    // },
    // {
    //   "id": "UKR",
    //   "value": 322547
    // },
    // {
    //   "id": "URY",
    //   "value": 48664
    // },
    {
      id: "USA",
      value: "75",
    },
    // {
    //   "id": "UZB",
    //   "value": 924435
    // },
    // {
    //   "id": "VEN",
    //   "value": 931135
    // },
    // {
    //   "id": "VNM",
    //   "value": 359820
    // },
    // {
    //   "id": "VUT",
    //   "value": 213238
    // },
    // {
    //   "id": "PSE",
    //   "value": 39256
    // },
    // {
    //   "id": "YEM",
    //   "value": 61961
    // },
    // {
    //   "id": "ZAF",
    //   "value": 884018
    // },
    // {
    //   "id": "ZMB",
    //   "value": 642177
    // },
    // {
    //   "id": "ZWE",
    //   "value": 913082
    // },
    // {
    //   "id": "KOR",
    //   "value": 36335
    // }
  ];
  const map_chart_props = {
    margin: { top: 0, right: 10, bottom: 0, left: 10 },
    colors: ["#ea1414"],
    domain: [0],
    unknownColor: "grey",
    label: "properties.name",
    valueFormat: ".2s",
    projectionTranslation: [0.5, 0.5],
    projectionRotation: [0, 0, 0],
    enableGraticule: true,
    graticuleLineColor: "#dddddd",
    borderWidth: 0.5,
    borderColor: "#152538",
    defs: [
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
      {
        id: "gradient",
        type: "linearGradient",
        colors: [
          {
            offset: 0,
            color: "#000",
          },
          {
            offset: 100,
            color: "inherit",
          },
        ],
      },
    ],
    fill: [
      // {
      //     match: {
      //         id: 'CAN'
      //     },
      //     id: 'dots'
      // },
      // {
      //     match: {
      //         id: 'CHN'
      //     },
      //     id: 'lines'
      // },
      // {
      //     match: {
      //         id: 'ATA'
      //     },
      //     id: 'gradient'
      // }
    ],
    // legends:[
    //     {
    //         anchor: 'bottom-left',
    //         direction: 'column',
    //         justify: true,
    //         translateX: 20,
    //         translateY: -100,
    //         itemsSpacing: 0,
    //         itemWidth: 94,
    //         itemHeight: 18,
    //         itemDirection: 'left-to-right',
    //         itemTextColor: '#444444',
    //         itemOpacity: 0.85,
    //         symbolSize: 18,
    //         effects: [
    //             {
    //                 on: 'hover',
    //                 style: {
    //                     itemTextColor: '#000000',
    //                     itemOpacity: 1
    //                 }
    //             }
    //         ]
    //     }
    // ]
  };

  const [text, setText] = useState(data); // State to hold the textarea value

  const handleChange = (event) => {
    setText(event.target.value); // Update state on input change
  };
  return (
    <Fragment>
      <div className="source-code-pro-font container-margin flex-container">
        <h3 className="red">I'm #open-to-work!&nbsp;</h3>
        <h3>Here is my resume</h3>
        <a className="icon-pad container-margin" href={resume} target="_blank">
          <GrDocumentDownload size={40} />
        </a>
      </div>
      <div className="source-code-pro-font container-margin flex-container">
        <h3>Send me a message on LinkedIn&nbsp;</h3>
        <a className="container-margin" href={"https://www.linkedin.com/in/nitin-appiah/"} target="_blank">
          <FaLinkedin className="icon-pad red" size={50} />
        </a>
        <h3 className="inline">&nbsp;or Email&nbsp;</h3>
        <div>
          <IoIosMail className="red" size={50} />
        </div>
      </div>
      <div className="source-code-pro-font container-margin flex-container">
        <div className="mb-3" style={{ width: "50vh" }}>
          <textarea
            style={{ padding: "5vh", color: "grey" }}
            onChange={handleChange} // Update state on change
            className="form-control"
            id="email-body"
            rows={10}
            defaultValue={data}
          />
          <div className="source-code-pro-font container-margin flex-container" style={{margin: "1vh"}}>
            <a
          // @ts-ignore
              href={`mailto:nitinappiah@gmail.com?subject=${"Connect with Nitin Appiah"}&body=${text.replaceAll(
                "\n",
                "%0A"
              )}`}
            >
              <div
                className="btn-style"
              >
                Send <IoIosMail size={50} />
              </div>
            </a>
          </div>
        </div>
        <div style={{ height: "50vh", width: "80vh", margin: "1vh" }}>
          <ResponsiveChoropleth
            data={plot_data}
            {...map_chart_props}
            features={features["features"]}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
