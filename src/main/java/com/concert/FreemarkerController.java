package com.concert;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Teori on 2018/4/9.
 */
@Controller
public class FreemarkerController {

    @RequestMapping("/hi")
    public String sayHello(Model model){
        System.out.println("----");
        model.addAttribute("name","张三");
        return "hi";
    }
}