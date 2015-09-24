
var dict = {};
// dictionary of elements 
dict['background'] = "\
		<div class='textDiv center-block background' > \
            Welcome! Today we are going to get past our lack of knowledge of Android development \
            and reach the novice programers first milestone, the awe inspiring Hello World application. \
            We are going to be using a Mac so if you have another OS you can follow along, but it may make more \
            sense to look at a different guide. Now let's talk about Android for a little bit. Android is a framework \
            built on top of java meaning that Android apps are written in java. Knowing the ins and outs of java certainly \
            makes Android development easier, but that knowledge is by no means a requirement. In fact the way the Android \
            framework is designed, no previous programing experience is necessary to learn how to make basic Android apps. \
            <br> \
            <br> \
            Think of basic Android development like putting together a 1000 piece puzzle, except the guiding picture is \
            our imagination and the puzzle pieces are code written for us by experts at Google. All we have to do is put the \
            right pieces in the right place to make the picture in our head a reality. \
        </div>";

dict['setting-up-our-computer'] = " \
		<div class='textDiv center-block setting-up-our-computer'> \
		    First, before we do anything we have to make sure that our Mac system software is up to date. \
		    The next step is to make sure that we have JDK 6 (Java Developer Kit) or higher installed. We can \
		    do this by typing the <code class='prettyprint'>javac -version</code> into a terminal window. If the appropriate JDK \
		    is not installed we will have to \
		    <a href='http://www.oracle.com/technetwork/java/javase/downloads/index.html'>download it</a>. \
		    <br> \
		    <br> \
		    What we need is the Mac OS x64 version of the JDK. To download it first click the Java icon, \
		    then accept Oracle's license agreement and then click the download link associated  \
		    with the Mac OS x64 version of the JDK. A .dmg file will then be downloaded and put into our browser's \
		    default download folder. It should be called something along the lines of jdk-8u45-macosx-x64.dmg. \
		    Double click the .dmg file to start the installation process. Installing the JDK should be very \
		    simple, just follow the instructions provided by the installer and let the computer do all the work. \
		    Once it's finished, we can double check that everything was successful by typing \
		    <code class='prettyprint'> javac -version </code> once more in the terminal. \
		</div>";

dict['setting-up-android-studio'] = " \
		<div class='textDiv center-block setting-up-android-studio'> \
		    Now that our computer is set up we need to \
		    <a href='https://developer.android.com/sdk/index.html'>download Android Studio</a>. \
		    We are going to click on download Android Studio for Mac, then accept Google's terms and \
		    conditions, and then click download Android Studio for Mac. A .dmg file will then be \
		    downloaded and put into our browser's default download folder, it should be called something \
		    along the lines of android-studio-ide-141-mac.dmg. \
		    <br> \
		    <br> \
		    Double click the .dmg file and then drag Android Studio into our Applications folder. \
		     Launch Android Studio to start the installation process. Android Studio \
		     is going to ask us if we want to import any settings from a previous version of Android \
		     Studio. Since we are doing a fresh install we will select the bottom option to not import \
		     any settings, however if we were attempting to manually update Android Studio this would be \
		     an easy way to transfer all of our settings from our previous version. Android Studio is \
		      then going to launch a set up wizard which will streamline and ease the installation process. \
		    <br> \
		    <br> \
		    Android is going to ask us if we want to do a Standard installation or a Custom \
		    installation, we are going to select the Standard type, it's going to make our lives a \
		    lot easier. Now we have to accept Google's license agreement to continue with the installation. \
		    Each Android Studio package has its own license agreement and there are many packages. Accepting \
		     the license agreement by category is easier, categories are marked by a down arrow that \
		     collapses the list of packages when clicked on. Once we have agreed to the license agreement \
		      we can click finish to install Android Studio. Android Studio is now installed onto our computer. \
		    <br> \
		    <br> \
		    Unfortunately the setup process is not quite finished. Android Studio is an IDE \
		    (Integrated Development Environment) it allows us to use essential tools that we need \
		     to build our very first Android app, and allows us to add new tools as the scope \
		     of our application demands them. We have to add just a few more tools, or packages  \
		     to Android Studio. \
		    <br> \
		    <br> \
		    After finishing the install, Android Studio should have launched a small window \
		     containing two panels, one labeled Recent Projects and the other Quick Start. We \
		     will call this the Welcome Screen from now on. Under Quick Start we are going to \
		     select configure. Then we are going to select SDK Manager. This will open up the \
		     Android Studio SDK (Software Developer Kit) Manager, which is a tool we use to \
		     download and manage new packages. We can download packages individually or as groups, \
		     with the same interface that we previously used for the license agreements. Android Studio \
		     already selected a few packages for us to download, that's okay leave them be. Minimize \
		     the drop down arrows and select the Tools group, the Android 5.1.1 (API 22) group, and \
		     the Android 4.0.3 (API 15) group. Then click install packages. Accept the licenses and click install. \
		    <br> \
		    <br> \
		    Now might be a good time to eat lunch or brew some coffee because all of these downloads are \
		     going to take a long time to finish, and that is completely normal. \
		</div>";

dict['starting-the-project'] = " \
		<div class='textDiv center-block starting-the-project'> \
		    Now that we have Android Studio set up and ready to go it's time to start our first project! \
		    <br> \
		    Go back to the Welcome Screen and select Start a new Android Studio project. \
		    The project wizard should pop up. This is a GUI (graphical user interface) and it has \
		    three phases: Project Configuration, Target Android  \
		    Device Configuration, and Template Activity Selection. \
		    <br> \
		    <div id='project-configuration'> \
                <div class='triangle-right' onClick='dropdown(this, this.parentElement.id);'></div> \
    			<h2>Project Configuration</h2> \
            </div> \
		    \
		    <div id='target-android-device-configuration'> \
                <div class='triangle-right' onClick='dropdown(this, this.parentElement.id);'></div> \
    			<h2>Target Android Device Configuration</h2> \
            </div> \
		    \
		    \
		    <div id='template-activity-selection'> \
                <div class='triangle-right' onClick='dropdown(this, this.parentElement.id);'></div> \
    			<h2>Template Activity Selection</h2> \
            </div> \
            \
		</div>";


dict['project-configuration'] =" \
		<div class='center-block textDiv project-configuration'>  \
	        The Project Configuration phase has \
	        four components: the Application Name, Company Domain, \
	        Package Name, and Project Location. \
	        <h3>Application Name</h3> \
	        The Application Name is the name of the app that will appear in the \
	        Google Play store as well as the Home screen of devices. \
	        <h3>Package Name</h3> \
	        The Package Name is the unique identifier that Android will use for \
	         our project/package. For now we can think of the difference between  \
	         projects and packages as similar to the difference between organizations \
	          and departments. Organizations and departments are abstract  \
	          containers of people. Organizations contain departments, however, small \
	          organizations can be taken and turned into a department of bigger organizations. \
	          Similarly, projects and packages are both abstract containers \
	          of functionality, but projects contain packages, and can in turn become  \
	          packages of larger projects. This is not the most accurate description of the relationship \
	          between packages and projects, but for now it will do. The Package \
	          Name is generally automatically  \
	          generated as a combination of the Company Domain and the Application Name. \
	          This is a practice to easily prevent duplicate Package Names. Two companies \
	          may have two different Android apps with the same name, but one company will \
	          not have two different Android apps with the same name. Thus by combining the \
	          Company Domain and the Application Name we have an easy and memorable unique identifier. \
	        <h3>Company Domain</h3> \
	        The Company Domain is the domain name or url of the company \
	        developing the Android app. It is used to generate the Package Name. \
	        Unless we are planning to release our app onto the Google Play store, it is not \
	        important. We are going to abritarily pick myCompany.com as the Company Domain. \
	        <br> \
	        <br> \
	        <h3>Project Location</h3> \
	        The Project Location is the location that our project will be saved in \
	        our computer file system. Generally the project will be stored in a directory \
	        matching the Application Name in the AndroidProjects directory in the home directory \
	        of our computer file system. This ensures that users are only able to interact with \
	        their own projects. \
	    </div>";

dict['target-android-device-configuration'] = " \
	    <div class='textDiv center-block target-android-device-configuration'> \
		        The Target Android Device Configuration phase has one component with \
		         four options. In this phase we choose what kind of device, and the  \
		         minimum SDK required to be able to  download our Android app. Since  \
		         we are building a mobile application we are not going to worry  \
		         about TV, Wear, or Glass, and we will leave those unchecked. After  \
		         making sure that Phone and Tablet is checked, we are going to select \
		         API 15: Android 4.0.3 (IceCreamSandwich) as our Minimum SDK. The  \
		         Minimum SDK represents the minimum version of Android that a user \
		          needs to have to use our app, it is the lower limit of support we  \
		          are setting for our application. We are choosing this particular SDK   \
		          because the number of Android devices that use software below this \
		          SDK is so small that it is not worth spending time to support those devices. \
		          Google has a \
		          <a href='https://developer.android.com/about/dashboards/index.html'>breakdown of \
		          devices that are active on the Google Play store, categorized by SDK</a>. Google will \
		           not show our application to devices that are using a version of Android older than the Minimum SDK we set. \
		    </div>";

dict['template-activity-selection'] = " \
		<div class='center-block textDiv template-activity-selection'> \
	        The Template Activity Selection phase is also one component with multiple options. \
	         Each option is a different type of Template Activity we can use to make  \
	         the common first steps of developing particular types of applications faster. \
	          We are going to select Blank Activity in a second. First we must learn what an Activity is. \
	        <br> \
	        <br> \
	        Activities are a pre-determined class in the Android framework and they are \
	        the building blocks of the UI (User Interface). All applications with a UI must \
	        inherit this class to create windows that the user can interact with. Most \
	        applications with a UI will have one activity designated as the main activity \
	        that will be the first activity to be launched. Understanding how Activities work \
	         and their life-cycle is vital to proper Android development, however for today \
	         this is enough detail to move forward. \
	        <br> \
	        <br> \
	        Now we are going to select the Blank Activity option from the Template Activity \
	        Selection screen. Since we choose a template Activity we will now be presented with a \
	        configuration screen for that Activity. \
	        <br> \
\
	        <div id='activity-configuration'> \
                <div class='triangle-right' onClick='dropdown(this, this.parentElement.id);'></div> \
    			<h2>Activity Configuration</h2> \
            </div> \
            \
	    </div>";

dict['activity-configuration'] = " \
	    <div class='center-block textDiv activity-configuration'> \
		        The Activity Configuration screen has four components, each one of them an identifier, that we \
		        and the Android framework will use to keep track of the elements that are \
		        automatically generated for us by the Blank Activity template. These \
		        elements are the Activity Name, the Layout Name, the Title, and the Menu \
		        Resource Name. The Activity Name is  the identifier we will use to refer to our \
		         main Activity. The Layout Name is the identifier we will use to refer \
		         to the layout of our main Activity. The Title is what our Activity displays \
		         as its title in the action bar (the bar at the top of many Android apps). \
		         The Menu Resource Name is the identifier we will use to refer to our options \
		         menu, which is a part of the Action Bar. In this particular template the Title \
		         is on the left side of the Action Bar and the Options Menu is on the right side. \
		    </div>";

dict['reviewing-the-project'] = " \
		<div class='textDiv center-block reviewing-the-project'> \
		    Now we have our project opened in Android Studio. Android apps \
		    are composed of many different parts. The structure of our project can \
		     be looked at from a multitude of points of view, but we will focus on  \
		     only one, the Android Project View. To find the Android Project view  \
		     go to the side panel and make sure Project is selected, then on the  \
		     top bar of the side panel select Android from the drop down menu. \
		     There should be two top level containers, app and Gradle Scripts. \
		     We will ignore Gradle Scripts for the moment. \
 \
		    <h3>app</h3> \
		    <div> \
		        The app container contains everything in our application. We \
		        are going to spend a little time understanding what some of the  \
		        basic pieces of Android apps are and how they fit together. When \
		        we expand the app container we see that it there are three more \
		        containers within it. These are manifests, java, and res. \
 \
		        <h4>manifests</h4> \
		        <div> \
		            This container holds all the manifest files for the application. \
		            Manifest are kind of like blueprints  for modules. In our case there \
		            is only one manifest the AndroidManifest and it is very important. \
		            This XML file tells the Android system what the pieces of your app \
		            are and what they are called, allowing the system to refer to \
		            and use them appropriately. \
		        </div> \
 \
 \
		        <h4>res</h4> \
		        <div> \
		            This container holds all the resource files for the application.  \
		            Resources are the pieces of the application that the users see.  \
		            There are a few folders in this container but we are only going \
		            to focus on the layout folder. \
 \
		            <h4>layout</h4> \
		            <div> \
		                This folder contains the layout files for our application. \
		                In this case since we only have one activity there is only one \
		                XML file, called activity_main.xml. Layout files dictate to \
		                activities what, where, and how to display resources and UI \
		                elements to the user. Layout files as we will see later \
		                interact with activities indeirectly. Multiple activities can \
		                use the same layout file. \
		            </div>  \
 \
		        </div> \
 \
		        <h4>java</h4> \
		        <div> \
		            This container holds all the source files for the application. Source   \
		            files essentially define the behavior of the application. Our java   \
		            container has two packages both of them have the same package name.  \
		            We should remember this name since it is the same package name that   \
		            was generated for our project during the configuration phase. The   \
		            second package is for tests which is something we will ignore for now.  \
		            The first package contains a java file called MainActivity, which  \
		            is what we called our main activity in the activity configuration  \
		            phase. By clicking on it we open up a file called MainActivity.java,  \
		            which is the actual code that dictates the behavior of our application.  \
 \
		            <h5>MainActivity.java</h5> \
		            <div> \
		                MainActivity class extends the ActionBarActivity class. This means \
		                that it is a new class that has inherited the properties of the  \
		                ActionBarActivity, which in turn inherited the properties of the  \
		                Activity class. There are three functions in this class, but we will \
		                only talk about one, the onCreate() function. \
		                <br> \
		                <br> \
		                <pre class='prettyprint'>@Overwrite<br>protected void onCreate(Bundle savedInstanceState)</pre> \
		                <br> \
		                Ignore the key words protected and void, for today they are not important. The \
		                onCreate(Bundle savedInstanceState) is the function that dictates what MainActivity \
		                will do when it is created. The keyword @Overwrite before the onCreate means that \
		                we are replacing the function onCreate() that MainActivity inherited with a \
		                different function. It is passed a parameter with a datatype of Bundle. \
		                Bundles are containers that hold variables, they can be used to share data \
		                between activities. For now that is all we need to know about Bundles. \
		                <br> \
		                <br> \
		                super .onCreate(savedInstanceState). \
		                <br> \
		                This calls the inherited function onCreate that MainActivity inherited from  \
		                ActionBarActivity. This is the piece of code that actually creates the our  \
		                activity MainActivity. We pass it the Bundle object that was passed to the  \
		                onCreate() so that the function in the inherited class has access to the objet.  \
		                <br> \
		                <br> \
		                setContentView(R.layout.activity_main) \
		                <br> \
		                setContentView() is a function that MainActivity has inherited and it sets the  \
		                view of MainActivity, what the user sees and interacts with, to the View object  \
		                that we pass to the function. In our case we pass it R.layout.activity_main which  \
		                is a view that is generated from the XML file in the layout folder contained  \
		                in res. R is a class that is auto-generated from our resources in our res  \
		                container by the IDE. By passing R.layout.activity_main we make sure that \
		                the Android System grabs the right object. \
		            </div> \
		        </div> \
		    </div> \
		     We did not, and will not be editing anything since the template Blank Activity is  \
		     a simple hello world app as it stands. We now have a rough understanding of how  \
		     the pieces of Android applications fit together. All that is left is to run the application! \
		</div>";

dict['running-the-application'] = " \
	    <div class='textDiv center-block running-the-application'> \
			Now that we have configured our Android app and we have a basic \
			understanding of the pieces that Android apps are composed of we \
			can finally run the app. We are going to do this using a tool \
			called an emulator. An emulator is nothing more than a simulation \
			of a phone that is run on your computer. \
			<br>  \
			<br> \
			While in Android Studio click on tools in the menu bar \
			(the very top bar on the screen). This will reveal a drop down menu, \
			select Android from that menu to reveal yet another drop down menu \
			and then select the option AVD Manager (Android Virtual Device Manager). \
			This tool is used to manage all of our virtual devices! Now it's possible \
			that Android already created a device for us, but we are not going to use \
			that one. We are going to create a new device by selecting Create Virtual  \
			Device. Virtual Devices have two major aspects to them, the Hardware Profile \
			and the System Image. \
			<br> \
			<br> \
			<h3>Hardware Profile</h3> \
			The Hardware Profile is the actual phone that we will be simulating, there \
			are many preset profiles to choose from, but we are going to create our own by \
			 selecting New Hardware Profile. This is going to open up the Configure Hardware \
			  Profile window. From here we can completely customize the kind of device we \
			  want to simulate, including creating phones that don't currently exist. We have \
			   complete control over the type of device, size of the screen, and many other \
			   options. We are only going to change two things, the Device Name and the amount \
			   of Memory it uses. The purpose of the Device Name will become evident in a few \
			   minutes, for now let's change it to Default Phone. We are going to change Memory \
			    from 2 GB to 1 GB. We are doing this to prevent a few bugs from being a nuisance  \
			    down the road. Now by clicking ok our Hardware Profile will be saved! Now our  \
			    custom Hardware Profile is saved in the hardware list, identified by the device  \
			    name that we choose to give it. We will be selecting the Hardware profile we  \
			    just created Default Phone. \
			<br> \
			<br> \
			<h3>System Image</h3> \
			Now we are presented with a whole bunch of System Images that look awfully similar. \
			Before we decide which one to use however lets delve into what a System Image is. The \
			System Image is the software that our virtual device is going to simulate. The ability \
			to customize both the Hardware Profile and System Image of our phone allows us to test  \
			our app virtually on any device imaginable. In Android development testing forward  \
			compatibility (how our app behaves when the Target SDK of our app is below the SDK running on the device) \
			and backwards compatibility  \
			(how our app behaves when the Target SDK of our app is above the SDK running on the device)  \
			is extremely important. To choose which System Image is best for us to use we have to understand \
			 what the components listed are.  \
			<br> \
			<br> \
			<h4>Release Name</h4> \
			The Release Name is a code name used to mark significant changes between Android versions. \
			The naming mechanism is similar to how storms are named. If a storm reaches a certain  \
			threshold size it is given a name. The names are allocated by letter of the alphabet in  \
			chronological order. The name of the first storm starts with an A, the name of the second  \
			starts with a B, and so on. Coming back to Android Release Names, essentially when Google  \
			introduces a transformative update it changes the Release Name of the new update to the  \
			name of a dessert that starts with the next letter of the alphabet, because what sells  \
			better than dessert? \
			<br> \
			<br>  \
			<h4>API Level</h4> \
			API Level is confusingly similar to the Release Name. The API Level is determined by \
			changes to the internal API that the Android framework and Android developers use to  \
			make applications work. Android updates are designed to be additive and to expand  \
			the current framework, ensuring that Android apps targeting older API Levels will  \
			still be useable in newer API Levels. To make this happen Google depreciates outdated  \
			features of older API Levels in newer API Levels, instead of completely removing them. \
			The larger the difference between API Levels the harder it becomes to make forward and  \
			backwards compatibility automatic. Essentially you can use the Release Name and API Level \
			 to gauge how much work it is going to be to ensure forward and backwards compatibility.  \
			 Generally each Release Name has no more than two or three API Levels associated with it.  \
			 This means that apps that target the same Release Name as the Release Name of the software  \
			 on a device will have little to no work required to ensure that the app works properly on  \
			 that device. Apps and devices with one Release Name separation will likely require some  \
			 work ensure proper functionality, multiple Release Name separation will likely require  \
			 even more work. Essentially as the API Levels change the app is going to have to have extra \
			 code included to achieve the same functionality on devices running different software. \
			 This is where the Minimum SDK we talked about earlier becomes important. Devices below the \
			 Minimum SDK of an app are unable to download the app, thus the developers do not have to  \
			 worry about making sure their app works on devices below the Minimum SDK. This saves  \
			 them a lot of time.  \
			<br> \
			<br> \
			<h4>ABI</h4> \
			The ABI is the Android Binary Interface. It is the computer architecture that powers \
			 the device (remember smart devices are small computers). We are not going to worry  \
			 about what that means because at this stage it is not really important. What we do need \
			 to know however is the surface level difference between armeabi-v7a and x86. Armeabi-v7a \
			 is very close to the architecture of an actual Android phone, but will make your emulator  \
			 slow. x86 is not as close to the actual architecture of an Android phone, but our  \
			 emulator will be less slow using it. Emulators are slow, this is a core tenant of Android development. \
			<br> \
			<br> \
			<h4>Target</h4> \
			Target is the particular version of Android that the emulator will be running. \
			Each API Level has multiple versions within them. The differences between versions \
			within the same API Level are usually minor and require no work to ensure proper  \
			functionality. Remember: Release Name > API Level > versions.  \
			<br> \
			<br> \
			<h3>More on System Images</h3> \
			Since we don't want to worry about compatibility issues we are going to pick \
			the latest version! We are going to go with Release Name: Lollipop, \
			API Level: 22, ABI: x86 (for speed), and Target: Android 5.1.1. \
			<br> \
			<br> \
			<h3>AVD Verification</h3> \
			Now we are at the last Configuration step, the AVD verification. We  \
			need to give this AVD a Name so lets call it Default Phone API 22 x86.  \
			After a few minutes our new virtual device should appear in our AVD Manager! \
			<br> \
			<br> \
			<h3>Press Play</h3> \
			Now that we have a properly configured virtual device we can run our  \
			very first Android app! In the menu bar we are going to select Run and  \
			then in the drop down menu select Run 'app'. A window asking us to  \
			choose our device is going to appear (this may take a few moments),  \
			we are going to select our virtual device Default Phone API 22 x86  \
			from the drop down menu. Now the emulator is going to boot up our  \
			virtual device, and our app will be on that virtual device. It may  \
			take a few minutes for the emulator to be finished loading.  \
			Remember emulators and IDEs are powerful, but slow.  \
			<br> \
			<br> \
			We finally have our app working, Hello World, the most inspiring words a novice \
			programmer can ever read. \
		    <h1 style='text-align:center;'>Wait but I didn't do anything</h1> \
            <div> \
                It may not seem like you did anything, but we did a lot today. We have \
                acquired, configured, and achieved basic literacy of all of the software \
                and tools that we need to build the applications we want to build.  \
                This is a critical step. \
                <br> \
            </div> \
        </div>";

//dict 2 
var hdict = {};














//drop down function 
function dropdown(triangle, injectionID){
	console.log($(triangle));
	$(triangle).toggleClass("triangle-down triangle-right");
	if (triangle.className === "triangle-down"){	
		console.log("triangle turned green");
		console.log(injectionID);

		$('#'+injectionID).append(dict[injectionID]);
	}
	else{
		console.log("triangle turned red")
		console.log(injectionID);
		$("div").remove("."+injectionID);
	}	
}

//hover 
'<img src="img/androidPics/A1.png" style="width:100%; height:80%;">'
var fi = "<div id='toolTip' style='background-color: black; position: absolute; padding:8px;font-size: 14px; color: burlywood;'>kay thanks bye adjhf a daa ada adaa a ad da  da da ad a a dda a da daohfohohgodhoh aodah</div>"
$(document).ready( function (){
	$('.toolTip').tooltip({
	    items: ".toolTip",
	    content: function(){
	    	//return $(this)[0].innerHTML;
	    	return "fhlskjfhj fsflkj fslkjhjksl fjklsljkfs jklfshjklfsjklfs jklfskljfs jklfs jlkfs kjlfs kjlh kjlfsh kjlsfh "



	    },
		position: { my: "left bottom-25px", at: "center", collision:"fit" }	
	});
	
});


