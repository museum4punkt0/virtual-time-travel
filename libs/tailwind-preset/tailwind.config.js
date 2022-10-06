const sharedTheme = {
  theme: {
    fontFamily: {
      headline: 'var(--font-headline)',
      body: 'var(--font-body)',
    },

    colors: {
      primary: {
        light: 'var(--primary-light)',
        DEFAULT: 'var(--primary)',
        dark: 'var(--primary-dark)',
      },
      secondary: {
        light: 'var(--secondary-light)',
        DEFAULT: 'var(--secondary)',
        dark: 'var(--secondary-dark)',
      },

      /* libs/Ui */
      ui: {
        /* MainNav */
        nav: {
          bg: 'var(--ui-nav-bg)',
          link: {
            DEFAULT: 'var(--ui-nav-link)',
            active: 'var(--ui-nav-link-active)',
          },
        },

        /* Dialog */
        dialog: {
          overlay: 'var(--ui-dialog-overlay)',
          bg: 'var(--ui-dialog-bg)',
          primary: {
            DEFAULT: 'var(--ui-dialog-primary)',
            v2: 'var(--ui-dialog-primary-v2)',
          },
          secondary: {
            DEFAULT: 'var(--ui-dialog-secondary)',
            v2: 'var(--ui-dialog-secondary-v2)',
          },
        },

        /* Button */
        button: {
          primary: {
            DEFAULT: 'var(--ui-button-primary)',
            bg: 'var(--ui-button-primary-bg)',
          },

          secondary: {
            DEFAULT: 'var(--ui-button-secondary)',
            bg: 'var(--ui-button-secondary-bg)',
          },

          disabled: {
            DEFAULT: 'var(--ui-button-disabled)',
            bg: 'var(--ui-button-disabled-bg)',
          },
        },
      },
    },

    extend: {
      gap: {
        ui: {
          nav: 'var(--ui-nav-links-gap)',
        },
      },

      height: {
        ui: {
          nav: 'var(--ui-nav-size)',
        },
      },

      padding: {
        ui: {
          nav: 'var(--ui-nav-padding)',
          dialog: 'var(--ui-dialog-padding)',
        },
      },

      maxWidth: {
        app: 'var(--app-max-width)',
        ui: {
          dialog: 'var(--ui-dialog-max-width)',
        },
      },

      zIndex: {
        max: '999',
      },

      borderRadius: {
        ui: {
          button: 'var(--ui-button-radius)',
          dialog: 'var(--ui-dialog-radius)',
        },
      },
    },
  },
  plugins: [],
};

module.exports = sharedTheme;
