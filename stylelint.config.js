export default {
  extends: ['stylelint-config-standard-scss'],

  rules: {
    "color-hex-length": "long",
    "selector-class-pattern": [
      "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$",
      {
        "message": "Expected class selector to follow BEM convention"
      }
    ],
    "scss/load-no-partial-leading-underscore": null,
  }
}