export default function mainComponent(configuration) {
    const mainComponent = document.createElement('main');
    mainComponent.id = 'main';    
    mainComponent.classList.add('max-w-md', 'w-full', 'bg-white', 'p-8', 'rounded-lg', 'shadow-md');

    configuration.forEach((component) => {
        mainComponent.appendChild(component);
    });

    return mainComponent;
}