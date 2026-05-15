<template>
  <div class="relative w-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
    <svg viewBox="0 0 1200 210" preserveAspectRatio="xMidYMax meet"
         class="block h-28 sm:h-32 md:h-40 lg:h-48 w-[140%] -ml-[20%] sm:w-full sm:ml-0 overflow-visible">
      <defs>
        <!-- Sanfter Wackel-Effekt für „Handzeichnung"-Charakter -->
        <filter id="moe-wobble" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="7" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>

      <g filter="url(#moe-wobble)"
         fill="none" stroke="#2a1a12" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round"
         vector-effect="non-scaling-stroke">

        <!-- Pflaster / Baseline -->
        <path d="M0 192 H1200" />
        <path d="M0 197 H1200" stroke-dasharray="2 6" opacity="0.4" />

        <!-- ================================================= -->
        <!-- HAUS 1 · Fachwerk mit Spitzgiebel                  -->
        <!-- ================================================= -->
        <g transform="rotate(-0.4 78 192)">
          <path d="M14 192 V108 L78 48 L142 108 V192 Z" />
          <path d="M14 150 H142" />
          <path d="M14 108 H142" />
          <path d="M42 150 V108 M78 150 V108 M114 150 V108" />
          <path d="M42 192 V150 M78 192 V150 M114 192 V150" />
          <path d="M14 108 L42 130 M142 108 L114 130" />
          <path d="M14 192 L42 170 M142 192 L114 170" />
          <path d="M30 95 H126" opacity="0.5" />
          <path d="M50 78 H106" opacity="0.5" />
          <rect x="48" y="118" width="22" height="26" />
          <rect x="86" y="118" width="22" height="26" />
          <rect x="48" y="158" width="22" height="28" />
          <path d="M86 192 V162 Q100 154 114 162 V192" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 2 · Sandstein mit Volutengiebel               -->
        <!-- ================================================= -->
        <g transform="rotate(0.6 227 192)">
          <path d="M158 192 V102 H296 V192" />
          <path d="M158 102
                   C 158 90, 170 86, 180 92
                   C 184 76, 200 74, 206 88
                   L 214 64
                   L 227 38
                   L 240 64
                   L 248 88
                   C 254 74, 270 76, 274 92
                   C 284 86, 296 90, 296 102" />
          <path d="M227 38 V24" />
          <circle cx="227" cy="22" r="2.2" />
          <path d="M158 100 H296" opacity="0.45" />
          <path d="M158 148 H296" />
          <rect x="170" y="112" width="20" height="30" />
          <rect x="196" y="112" width="20" height="30" />
          <rect x="240" y="112" width="20" height="30" />
          <rect x="266" y="112" width="20" height="30" />
          <ellipse cx="227" cy="80" rx="9" ry="6" />
          <rect x="170" y="156" width="22" height="30" />
          <rect x="262" y="156" width="22" height="30" />
          <path d="M210 192 V156 H244 V192" />
          <path d="M210 156 Q227 146 244 156" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 3 · Niedriges Fachwerk mit Treppengiebel     -->
        <!-- ================================================= -->
        <g transform="rotate(-0.7 377 192)">
          <path d="M312 192 V120 H322 V108 H336 V96 H352 V84 H368 V76" />
          <path d="M368 76 H386 V84 H402 V96 H418 V108 H432 V120 H442 V192" />
          <path d="M312 156 H442" />
          <path d="M342 156 V120 M377 156 V120 M412 156 V120" />
          <path d="M312 120 L342 138 M442 120 L412 138" />
          <path d="M342 192 V156 M412 192 V156" />
          <path d="M312 192 L342 174 M442 192 L412 174" />
          <rect x="348" y="128" width="22" height="24" />
          <rect x="384" y="128" width="22" height="24" />
          <rect x="318" y="162" width="20" height="26" />
          <rect x="416" y="162" width="20" height="26" />
          <path d="M358 192 V164 H396 V192" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 4 · Hochzeitshaus · Sandstein, Walmdach     -->
        <!-- ================================================= -->
        <g transform="rotate(0.3 548 192)">
          <path d="M460 192 V82 H636 V192" />
          <path d="M460 82 L488 56 H608 L636 82" />
          <path d="M478 82 V62 L494 50 L510 62 V82" />
          <path d="M540 82 V58 L556 46 L572 58 V82" />
          <path d="M586 82 V62 L602 50 L618 62 V82" />
          <rect x="487" y="64" width="14" height="14" />
          <rect x="549" y="60" width="14" height="14" />
          <rect x="595" y="64" width="14" height="14" />
          <path d="M556 46 V32" opacity="0.7" />
          <path d="M556 33 L568 36 L556 40" opacity="0.7" />
          <path d="M460 92 H636" opacity="0.45" />
          <path d="M460 138 H636" />
          <rect x="472" y="102" width="22" height="30" />
          <rect x="502" y="102" width="22" height="30" />
          <rect x="532" y="102" width="22" height="30" />
          <rect x="562" y="102" width="22" height="30" />
          <rect x="592" y="102" width="22" height="30" />
          <rect x="472" y="148" width="22" height="36" />
          <rect x="502" y="148" width="22" height="36" />
          <rect x="572" y="148" width="22" height="36" />
          <rect x="602" y="148" width="22" height="36" />
          <path d="M534 192 V148 H564 V192" />
          <path d="M534 148 Q549 138 564 148" />
          <path d="M549 148 V192" opacity="0.4" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 5 · Fachwerk mit Vorkragung (Überhang)        -->
        <!-- ================================================= -->
        <g transform="rotate(-0.5 725 192)">
          <path d="M666 192 V140 H784 V192" />
          <path d="M656 140 V96 H794 V140 Z" />
          <path d="M666 140 L656 132 M784 140 L794 132" opacity="0.7" />
          <path d="M696 140 L692 134 M754 140 L758 134" opacity="0.5" />
          <path d="M656 96 L725 50 L794 96" />
          <path d="M680 86 H770" opacity="0.55" />
          <path d="M700 70 H750" opacity="0.55" />
          <path d="M686 140 V96 M716 140 V96 M734 140 V96 M764 140 V96" />
          <path d="M656 140 L686 116 M794 140 L764 116" />
          <path d="M656 96 L686 120 M794 96 L764 120" />
          <path d="M696 192 V140 M754 192 V140" />
          <rect x="692" y="106" width="22" height="28" />
          <rect x="736" y="106" width="22" height="28" />
          <rect x="670" y="150" width="24" height="36" />
          <path d="M702 192 V150 H750 V192" />
          <path d="M726 150 V192" opacity="0.4" />
          <rect x="756" y="150" width="24" height="36" />
          <path d="M725 50 V40" opacity="0.8" />
          <path d="M725 40 L734 42 L725 46" opacity="0.8" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 6 · Schmales Sandsteinhaus, Schweifgiebel    -->
        <!-- ================================================= -->
        <g transform="rotate(0.8 863 192)">
          <path d="M812 192 V110 H914 V192" />
          <path d="M812 110
                   Q 812 96, 826 92
                   Q 832 76, 848 76
                   L 848 58
                   Q 863 48, 878 58
                   L 878 76
                   Q 894 76, 900 92
                   Q 914 96, 914 110" />
          <path d="M863 48 V36" />
          <circle cx="863" cy="34" r="2" />
          <ellipse cx="863" cy="86" rx="9" ry="6" />
          <path d="M812 152 H914" />
          <rect x="820" y="120" width="22" height="26" />
          <rect x="852" y="120" width="22" height="26" />
          <rect x="884" y="120" width="22" height="26" />
          <rect x="820" y="160" width="22" height="26" />
          <rect x="884" y="160" width="22" height="26" />
          <path d="M848 192 V162 H878 V192" />
          <path d="M848 162 Q863 154 878 162" />
        </g>

        <!-- ================================================= -->
        <!-- HAUS 7 · Breites Fachwerk, Krüppelwalm + Giebel    -->
        <!-- ================================================= -->
        <g transform="rotate(-0.3 1060 192)">
          <path d="M932 192 V108 H1188 V192" />
          <path d="M932 108 L968 70 L1152 70 L1188 108" />
          <path d="M968 70 L1060 38 L1152 70" />
          <path d="M988 60 H1132" opacity="0.55" />
          <path d="M1060 38 V70" opacity="0.55" />
          <path d="M1010 70 L1060 50 L1110 70" opacity="0.55" />
          <path d="M932 152 H1188" />
          <path d="M932 108 H1188" />
          <path d="M962 152 V108 M992 152 V108 M1022 152 V108 M1060 152 V108
                   M1098 152 V108 M1128 152 V108 M1158 152 V108" />
          <path d="M932 152 L962 124 M1188 152 L1158 124" />
          <path d="M932 108 L962 130 M1188 108 L1158 130" />
          <path d="M968 192 V152 M1050 192 V152 M1100 192 V152 M1158 192 V152" />
          <rect x="966" y="118" width="22" height="28" />
          <rect x="996" y="118" width="22" height="28" />
          <rect x="1026" y="118" width="22" height="28" />
          <rect x="1064" y="118" width="22" height="28" />
          <rect x="1102" y="118" width="22" height="28" />
          <rect x="1132" y="118" width="22" height="28" />
          <rect x="1162" y="118" width="22" height="28" />
          <rect x="972" y="160" width="74" height="28" />
          <path d="M996 160 V188 M1020 160 V188" opacity="0.45" />
          <path d="M1056 192 V160 H1094 V192" />
          <rect x="1104" y="160" width="52" height="28" />
          <path d="M1130 160 V188" opacity="0.45" />
        </g>

        <!-- Subtile Pflaster-Akzente -->
        <g opacity="0.35">
          <path d="M120 196 L130 196 M250 196 L262 196 M520 196 L535 196
                   M760 196 L772 196 M880 196 L892 196 M1080 196 L1095 196" />
        </g>

      </g>
    </svg>
  </div>
</template>
