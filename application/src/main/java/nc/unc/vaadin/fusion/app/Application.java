package nc.unc.vaadin.fusion.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.vaadin.artur.helpers.LaunchUtil;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        LaunchUtil.launchBrowserInDevelopmentMode(SpringApplication.run(Application.class, args));
    }
}
