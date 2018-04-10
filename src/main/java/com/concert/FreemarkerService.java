package com.concert;

import freemarker.template.Configuration;
import freemarker.template.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Teori on 2018/4/9.
 */
@Repository
public class FreemarkerService {

    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;

    public String genHtml() throws Exception{
        //2、从FreeMarkerConfigurer对象中获得Configuration对象
        Configuration configuration = freeMarkerConfigurer.getConfiguration();
        Template template = configuration.getTemplate("hello.ftl");
        //5、创建一个模板使用的数据集，可以是pojo也是map
        Map dataModel = new HashMap<>();
        //向数据集中添加数据
        dataModel.put("hello","1000");
        //6、创建一个Writer对象，一般创建FileWriter对象，指定生成的文件名
        Writer out = new FileWriter(new File("D:/freemarker/out/spring-freemarker.html"));
        //7、调用模板对象的process方法输出文件
        template.process(dataModel,out);
        //8、关闭流
        out.close();

        return "ok";
    }

}