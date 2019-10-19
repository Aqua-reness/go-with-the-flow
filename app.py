# app.py
# -*- coding: utf-8 -*-

import os

from kivy.app import App
from kivy.lang import Builder

from kivymd.list import BaseListItem
from kivymd.material_resources import DEVICE_TYPE
from kivymd.navigationdrawer import MDNavigationDrawer, NavigationDrawerHeaderBase
from kivymd.theming import ThemeManager

# User defined imports
from kivy.core.window import Window

# Window.fullscreen = "auto"

class MainApp(App):
    theme_cls = ThemeManager()
    title = "Go With The Flow"

    def build(self):
        main_widget = Builder.load_file(
            os.path.join(os.path.dirname(__file__), "./app.kv")
        )
        return main_widget

    def on_pause(self):
        return True

    def on_stop(self):
        pass


if __name__ == '__main__':
    MainApp().run()