package com.concert.demo;


import freemarker.template.Configuration;
import freemarker.template.Template;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Teori on 2018/4/9.
 */
public class FreemarkerDemo {
    //    public static void main(String[] args) {
    public String genHtml() throws Exception {
        //1、创建一个Configuration对象，直接new一个对象，构造方法的参数是freemarker的版本号
        Configuration conf = new Configuration(Configuration.getVersion());
        //2、设置模板文件所在的路径
        conf.setDirectoryForTemplateLoading(new File("D:/freemarker/ftl"));
        //3.设置模板文件使用字符集
        conf.setDefaultEncoding("utf-8");
        //4、加载一个模板，创建一个模板对象
        Template template = conf.getTemplate("hello.ftl");
        //5、创建一个模板使用的数据集，可以是pojo也是map
        Map dataModel = new HashMap<>();
        //向数据集中添加数据
        dataModel.put("hello", "this is my first freemarker demo.");
        //6、创建一个Writer对象，一般创建FileWriter对象，指定生成的文件名
        Writer out = new FileWriter(new File("D:/freemarker/out/hello.html"));
        //7、调用模板对象的process方法输出文件
        template.process(dataModel, out);
        //8、关闭流
        out.close();
        return "hello.html";
    }
}