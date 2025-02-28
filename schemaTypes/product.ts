import {defineField, defineType} from 'sanity'
import {MdDeveloperBoard as icon} from 'react-icons/md'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'display',
      title: 'DISPLAY',
    },
    {
      name: 'generalSpecifications',
      title: 'GENERAL SPECIFICATIONS',
    },
    {
      name: 'interactivity',
      title: 'INTERACTIVITY',
    },
    {
      name: 'computing',
      title: 'COMPUTING',
    },
    {
      name: 'audio',
      title: 'AUDIO',
    },
    {
      name: 'connectivity',
      title: 'CONNECTIVITY',
    },
    {
      name: 'panelManagement',
      title: 'PANEL MANAGEMENT',
    },
    {
      name: 'power',
      title: 'POWER',
    },
    {
      name: 'environmental',
      title: 'ENVIRONMENTAL',
    },
    {
      name: 'complianceCertification',
      title: 'COMPLIANCE & CERTIFICATION',
    },
    {
      name: 'physicalSpecifications',
      title: 'PHYSICAL SPECIFICATIONS',
    },
    {
      name: 'packedContents',
      title: 'PACKED CONTENTS',
    },
    {
      name: 'installation',
      title: 'INSTALLATION',
    },
    {
      name: 'warranty',
      title: 'WARRANTY',
    },
    {
      name: 'support',
      title: 'SUPPORT',
    },
    {
      name: 'educationSoftwareLicense',
      title: 'EDUCATION SOFTWARE LICENSE',
    },
    {
      name: 'technicalDrawings',
      title: 'TECHNICAL DRAWINGS',
    },
    {
      name: 'accessories',
      title: 'Accessories',
    },
    {
      name: 'webcam',
      title: 'Webcam',
    },
  ],
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'localisedTitle',
      title: 'Title',
      type: 'internationalizedArrayString',
      group: 'main',
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'internationalizedArrayString',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'main',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'main',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'finalText',
      title: 'Final normal size line before footer',
      type: 'internationalizedArrayString',
      group: 'main',
    }),
    defineField({
      name: 'prefooterText',
      title: 'Small font line above main footer text',
      type: 'internationalizedArrayString',
      group: 'main',
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'pdfTemplate',
      title: 'PDF Template',
      type: 'number',
      group: 'main',
    }),
    defineField({
      name: 'screenSizeAndResolution',
      title: 'Screen Size and Resolution',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'penAndTouchCapability',
      title: 'Pen and Touch Capability',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'multiUserMultiTouchInput',
      title: 'Multi-user and Multi-touch Input',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'crossPlatformCompatibility',
      title: 'Cross-Platform Compatibility',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'intuitiveInterface',
      title: 'Intuitive Interface',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'easyQuickLessonCreation',
      title: 'Easy, Quick Lesson Creation',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'learnerResponseIntegration',
      title: 'Learner Response Integration',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'learnerResponseSystemFeatures',
      title: 'Learner Response System Features',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),

    defineField({
      name: 'deviceType',
      title: 'Device Type',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'operatingSystem',
      title: 'Operating System',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'pcMinSpecs',
      title: 'PC Minimum',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'linuxMinSpecs',
      title: 'Linux Minimum',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),

    defineField({
      name: 'macMinSpecs',
      title: 'MAC Minimum',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'professionalEdition',
      title: 'Professional Edition',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),

    defineField({
      name: 'personalEdition',
      title: 'Personal Edition',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'cpu',
      title: 'CPU',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'gpu',
      title: 'GPU',
      type: 'internationalizedArrayString',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'ram',
      title: 'RAM (GB)',
      type: 'number',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'internalStorage',
      title: 'Internal Storage (GB)',
      type: 'number',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'touchscreenCompatibility',
      title: 'Touchscreen Compatibility',
      type: 'boolean',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'trustedPlatformModule',
      title: 'Trusted Platform Module',
      type: 'boolean',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'trustedPlatformModuleVersion',
      title: 'Trusted Platform Module Version',
      type: 'number',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'cloudBasedUserProfiles',
      title: 'Cloud Based User Profiles',
      type: 'boolean',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'totalSpeakerPower',
      title: 'Total Speaker Power',
      type: 'string', // Kept as string to handle "2 x 20 W RMS"
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'speakerSizes',
      title: 'Speaker Sizes',
      type: 'string', // Using string for "4 x 2.25”"
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'frequencyResponse',
      title: 'Frequency Response',
      type: 'string', // Using string for range "65 Hz - 20 KHz"
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'signalToNoiseRatio',
      title: 'Signal to Noise',
      type: 'string', // Kept as string to include "≥ 75 dB"
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'compatiblePrometheanDevices',
      title: 'Compatible Promethean Devices',
      type: 'string',
      group: 'generalSpecifications',
    }),
    defineField({
      name: 'hdmiInDetails',
      title: 'HDMI In',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'hdmiOutDetails',
      title: 'HDMI Out',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbType',
      title: 'USB Type',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'usb2',
      title: 'USB 2.0',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usb3',
      title: 'USB 3.0',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbTypeC',
      title: 'USB Type-C',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'combinedAudio35Mm',
      title: 'Combined Audio 3.5 mm',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'networkConnectivity',
      title: 'Network Connectivity',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    // New connectivity fields for Aux In, S/PDIF, Bluetooth, and USB-A
    defineField({
      name: 'auxIn',
      title: 'Aux In',
      type: 'number', // using number so that "x1" is stored as 1
      group: 'connectivity',
    }),
    defineField({
      name: 'spdif',
      title: 'S/PDIF',
      type: 'number', // using number for "x1"
      group: 'connectivity',
    }),
    defineField({
      name: 'bluetoothConnectivity',
      title: 'Bluetooth',
      type: 'boolean', // using boolean; "Yes" becomes true, "No" false
      group: 'connectivity',
    }),
    defineField({
      name: 'usbA',
      title: 'USB-A',
      type: 'number', // using number for "x1"
      group: 'connectivity',
    }),
    defineField({
      name: 'powerRequirements',
      title: 'Power Requirements',
      type: 'internationalizedArrayString',
      group: 'power',
    }),
    defineField({
      name: 'powerConsumption',
      title: 'Power Consumption',
      type: 'string',
      group: 'power',
    }),
    defineField({
      name: 'powerConsumptionStandby',
      title: 'Power Consumption Standby',
      type: 'string',
      group: 'power',
    }),
    defineField({
      name: 'ultraQuietFanlessDesign',
      title: 'Ultra-Quiet Fanless Design',
      type: 'boolean',
      group: 'power',
    }),
    defineField({
      name: 'operatingTemperatureMin',
      title: 'Operating Temperature Minimum (°C)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'operatingTemperatureMax',
      title: 'Operating Temperature Maximum (°C)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'storageTemperatureMin',
      title: 'Storage Temperature Minimum (°C)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'storageTemperatureMax',
      title: 'Storage Temperature Maximum (°C)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'operatingHumidityMin',
      title: 'Operating Humidity Minimum (%)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'operatingHumidityMax',
      title: 'Operating Humidity Maximum (%)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'storageHumidityMin',
      title: 'Storage Humidity Minimum (%)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'storageHumidityMax',
      title: 'Storage Humidity Maximum (%)',
      type: 'number',
      group: 'environmental',
    }),
    defineField({
      name: 'nonCondensingHumidity',
      title: 'Non-condensing humidity',
      type: 'boolean',
      group: 'environmental',
    }),
    defineField({
      name: 'productDimensionWidth',
      title: 'Product Dimension Width (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'productDimensionHeight',
      title: 'Product Dimension Height (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'productDimensionDepth',
      title: 'Product Dimension Depth (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'packedDimensionWidth',
      title: 'Packed Dimension Width (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'packedDimensionHeight',
      title: 'Packed Dimension Height (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'packedDimensionDepth',
      title: 'Packed Dimension Depth (mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'netWeight',
      title: 'Net Weight (kg)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'packedWeight',
      title: 'Packed Weight (kg)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'wallMountWidth',
      title: 'Wall Mount Width(mm)',
      type: 'number',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'wallMountHeight',
      title: 'Wall Mount Height(mm)',
      type: 'number',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'wallMountDepth',
      title: 'Wall Mount Depth(mm)',
      type: 'number',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'vesaMountPointWidth',
      title: 'VESA Mount Point Width(mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'vesaMountPointHeight',
      title: 'VESA Mount Point Height(mm)',
      type: 'string',
      group: 'physicalSpecifications',
    }),
    defineField({
      name: 'whatsInTheBox',
      title: "What's in the Box",
      type: 'internationalizedArrayString',
      group: 'packedContents',
    }),
    defineField({
      name: 'regulatoryCertification',
      title: 'Regulatory Certification',
      group: 'complianceCertification',
      type: 'string',
    }),
    defineField({
      name: 'energyStarCertified',
      title: 'energy Star Certified',
      group: 'complianceCertification',
      type: 'boolean',
    }),
    defineField({
      name: 'tradeAgreementsActTaaCompliance',
      title: 'Trade Agreements Act (TAA) Compliance',
      group: 'complianceCertification',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'standardWarranty',
      title: 'Standard WARRANTY',
      type: 'internationalizedArrayString',
      group: 'warranty',
    }),
    defineField({
      name: 'installationBlurb',
      title: 'INSTALLATION Blurb',
      type: 'internationalizedArrayString',
      group: 'installation',
    }),
    defineField({
      name: 'supportBlurb',
      title: 'Support Blurb',
      type: 'internationalizedArrayString',
      group: 'support',
    }),
    defineField({
      name: 'screenType',
      title: 'Screen Type',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'backlightTech',
      title: 'Backlight Technology',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'diagonalSize',
      title: 'Diagonal Size',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'blueLightReduction',
      title: 'Blue Light Reduction',
      type: 'boolean',
      group: 'display',
    }),
    defineField({
      name: 'bondedGlass',
      title: 'Bonded Glass',
      type: 'boolean',
      group: 'display',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      group: 'display',
    }),
    defineField({
      name: 'dryEraseSurface',
      title: 'Dry Erase Surface',
      type: 'boolean',
      group: 'display',
    }),
    defineField({
      name: 'displayArea',
      title: 'Display Area',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'displayColors',
      title: 'Display Colors',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'lcdViewingAngle',
      title: 'LCD Viewing Angle (Degrees)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'lcdResponseTime',
      title: 'LCD Response Time (ms)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'lcdRefreshRate',
      title: 'LCD Refresh Rate (Hz)',
      type: 'string',
      group: 'display',
    }),
    defineField({
      name: 'lcdBrightness',
      title: 'LCD Brightness (cd/m²)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'ledLifespan',
      title: 'LED Lifespan (Hours)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'contrastRatio',
      title: 'Contrast Ratio',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'typicalMaxBrightness',
      title: 'Typical Max. Brightness',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'brightness',
      title: 'Brightness (cd/m²)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'ambientLightSensor',
      title: 'Ambient Light Sensor',
      type: 'boolean',
      group: 'display',
    }),
    defineField({
      name: 'glassHardness',
      title: 'Glass Hardness',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'glassType',
      title: 'Glass Type',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'glassThickness',
      title: 'Glass Thickness (mm)',
      type: 'number',
      group: 'display',
    }),
    defineField({
      name: 'glassCoating',
      title: 'Glass Coating',
      type: 'internationalizedArrayString',
      group: 'display',
    }),
    defineField({
      name: 'vellumTouchTechnology',
      title: 'Vellum Touch Technology',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'touchTechnology',
      title: 'Touch Technology',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Infrared', value: 'infrared'},
        ],
        layout: 'tags',
      },
      group: 'interactivity',
    }),
    defineField({
      name: 'continuousTouchPoints',
      title: 'Continuous Touch Points',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'surfaceAreaResolution',
      title: 'Surface Area Resolution',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'touchResolution',
      title: 'Touch Resolution (px)',
      type: 'string',
      group: 'interactivity',
    }),
    defineField({
      name: 'objectSizeResolution',
      title: 'Object Size Resolution (mm diameter)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'touchRefreshRate',
      title: 'Touch Refresh Rate',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'multiTouch',
      title: 'Multi Touch',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'responseTime',
      title: 'Response Time (ms)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'touchAccuracy',
      title: 'Touch Accuracy (mm)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'userInput',
      title: 'User Input',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'trackingRate',
      title: 'Tracking Rate(m/s)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'scanRate',
      title: 'Scan Rate (hz)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'gesturesAndEdgeSwipes',
      title: 'Gestures and Edge Swipes',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'uniquePenIds',
      title: 'Unique Pen IDs',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'penAndTouchDifferentiation',
      title: 'Pen and Touch Differentiation',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'palmErase',
      title: 'Palm Erase',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'palmRejection',
      title: 'Palm Rejection',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'writingHandPalmRejection',
      title: 'Writing-hand Palm Rejection',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'pensIncluded',
      title: 'Pens Included',
      //note: render this as e.g. Yes,2
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'pensIncludedString',
      title: 'Pens Included',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'penType',
      title: 'Pen Type',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'penHolder',
      title: 'Pen Holder',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'penTipDiameter',
      title: 'Pen Tip Diameter (mm)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'penEraserDiameter',
      title: 'Pen Eraser Diameter (mm)',
      type: 'number',
      group: 'interactivity',
    }),
    defineField({
      name: 'integratedActivePenCharging',
      title: 'Integrated Active Pen Charging',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'touchEnabledPiP',
      title: 'Touch-enabled PiP',
      type: 'boolean',
      group: 'interactivity',
    }),
    defineField({
      name: 'classroomEssentialApps',
      title: 'Classroom Essential Apps',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'compatibility',
      title: 'Compatibility',
      type: 'internationalizedArrayString',
      group: 'interactivity',
    }),
    defineField({
      name: 'dualFrontFacingSpeakers',
      title: 'Dual Front-facing Speakers (W)',
      type: 'string',
      group: 'audio',
    }),
    defineField({
      name: 'isPeak',
      title: 'Peak?',
      type: 'boolean',
      group: 'audio',
    }),
    defineField({
      name: 'opsSlot',
      title: 'OPS Slot',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'hdmiInRear',
      title: 'HDMI In (Rear 2.0)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'hdmiInFront',
      title: 'HDMI In (Front 2.0)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'displayPort',
      title: 'Display Port (1.2)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbARear',
      title: 'USB-A (Rear)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbA2Rear',
      title: 'USB-A 2.0 (Rear)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbA32Rear',
      title: 'USB-A 3.2 Gen 1 (Rear)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbA32Front',
      title: 'USB-A 3.2 Gen 1 (Front)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbB32Rear',
      title: 'USB-B 3.2 Gen 1 (Touch,Rear)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbB32Front',
      title: 'USB-B 3.2 Gen 1 (Touch,Front)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbC32Rear',
      title: 'USB-C 3.2 Gen 1 (Rear)',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbBTouchFront',
      title: 'USB-B Touch (Front)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbBTouchRear',
      title: 'USB-B Touch (Rear)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'usbAFront',
      title: 'USB-A (Front)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'microSdSlot',
      title: 'MicroSD Slot',
      type: 'boolean',
      group: 'connectivity',
    }),
    defineField({
      name: 'lanIn',
      title: 'LAN In (RJ45-GBps)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'lanOut',
      title: 'LAN Out (RJ45-GBps)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'wakeOnLan',
      title: 'Wake-on-LAN',
      type: 'boolean',
      group: 'connectivity',
    }),
    defineField({
      name: 'wifi',
      title: 'Wi-Fi (Client)',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'bluetooth',
      title: 'Bluetooth',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'hdmiOut',
      title: 'HDMI Out (2.0)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'avIn',
      title: 'AV-In (3.5 mm)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'mic',
      title: 'Mic (3.5 mm)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'audioOut',
      title: 'Audio Out (3.5 mm)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'rs232',
      title: 'RS-232',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'otaUpdates',
      title: 'OTA Updates',
      type: 'boolean',
      group: 'panelManagement',
    }),
    defineField({
      name: 'prometheanAdminTools',
      title: 'Promethean Admin Tools',
      type: 'boolean',
      group: 'panelManagement',
    }),
    defineField({
      name: 'activInspireProfessionalSingleUser',
      title: 'ActivInspire® Professional Single User',
      //note: need to render this as e.g. Included
      type: 'boolean',
      group: 'educationSoftwareLicense',
    }),
    defineField({
      name: 'wirelessProtocol',
      title: 'Wireless Protocol',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'dualBand',
      title: 'Dual Band',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'mimo',
      title: 'MIMO',
      type: 'string',
      group: 'connectivity',
    }),
    defineField({
      name: 'bandwidth',
      title: 'Bandwidth (Mbps)',
      type: 'number',
      group: 'connectivity',
    }),
    defineField({
      name: 'connector',
      title: 'Connector',
      type: 'string',
      group: 'connectivity',
    }),
    defineField({
      name: 'encryption',
      title: 'Encryption',
      type: 'internationalizedArrayString',
      group: 'connectivity',
    }),
    defineField({
      name: 'combinedTechDimensionsmm',
      title: 'Combined Tech Dimensions mm',
      type: 'string',
      group: 'technicalDrawings',
    }),
    defineField({
      name: 'top',
      title: 'Top',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'back',
      title: 'Back',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front',
      title: 'Front',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side',
      title: 'Side',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'back2',
      title: 'Back2',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front2',
      title: 'Front2',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side2',
      title: 'Side2',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'back3',
      title: 'Back3',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front3',
      title: 'Front3',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side3',
      title: 'Side3',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'back4',
      title: 'Back4',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front4',
      title: 'Front4',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side4',
      title: 'Side4',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'back5',
      title: 'Back5',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front5',
      title: 'Front5',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side5',
      title: 'Side5',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'back6',
      title: 'Back6',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'front6',
      title: 'Front6',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'side6',
      title: 'Side6',
      type: 'image',
      group: 'technicalDrawings',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'standsProjectors',
      title: 'Stands & Projectors',
      type: 'internationalizedArrayString',
      group: 'accessories',
    }),
    defineField({
      name: 'activSoundBar',
      title: 'ActivSoundBar',
      type: 'internationalizedArrayString',
      group: 'accessories',
    }),
    defineField({
      name: 'sensor',
      title: 'Sensor',
      type: 'boolean',
      group: 'webcam',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'featuredImage',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        media: selection.media,
      }
    },
  },
})
