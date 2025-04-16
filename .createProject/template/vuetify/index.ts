import { createVuetify, type ThemeDefinition } from "vuetify";
import { VDateInput } from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#45a049",
    secondary: "#607D8B",
    accent: "#FFC107",
    error: "#F44336",
    warning: "#FF9800",
    info: "#2196F3",
    success: "#4CAF50",
  },
};

const vuetify = createVuetify({
  components: {
    ...components,
    VDateInput, // vuetifyのラボのv-date-inputを使用するため
  },
  directives,
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
      variant: "flat",
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
      clearable: true,
      counter: true,
    },
    VTextarea: {
      variant: "outlined",
      density: "compact",
      clearable: true,
      counter: true,
    },
    VFileInput: {
      variant: "outlined",
      density: "compact",
      clearable: true,
      prependIcon: null,
    },
    VSelect: {
      variant: "outlined",
      density: "compact",
      // clearable: true, // v-data-table などのページネーションに影響が出るため設定しない
    },
    VAutocomplete: {
      variant: "outlined",
      density: "compact",
      clearable: true,
    },
    VCombobox: {
      variant: "outlined",
      density: "compact",
      clearable: true,
    },
    VCheckbox: {
      density: "compact",
      hideDetails: true, // エラー文等を表示するコンポーネント下の22pxのエリアを非表示 (デフォルトはfalse)
    },
    VSwitch: {
      color: "primary",
    },
    VRadioGroup: {
      density: "compact",
      hideDetails: true, // エラー文等を表示するコンポーネント下の22pxのエリアを非表示 (デフォルトはfalse)
    },
    VRadio: {
      density: "compact",
    },
    VDataTable: {
      itemsPerPageText: "1ページあたりの表示数",
      noDataText: "データがありません",
      fixedHeader: true,
      fixedFooter: true,
    },
    VSheet: {
      border: true,
      rounded: true,
    },
    VDateInput: {
      variant: "outlined",
      density: "compact",
      readonly: true,
      prependIcon: null,
      placeholder: "",
      cancelText: "キャンセル",
      okText: "決定",
    },
  },
});

export default vuetify;

/**
 * ValidationRule型
 * ※vuetifyがtypeをexportしていないため
 */
// ↓eslintでvalueが使われていないエラーとして認識されるが型宣言のため無視させる
// eslint-disable-next-line
export type ValidationRule = (value: unknown) => string | true;

/**
 * v-selectのitems用の型
 */
export type SelectItems<T> = {
  title: string;
  value: T;
}[];
