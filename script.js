const pages = {
    home: `
        <div class="page home-bg">
            <div class="page-inner">
                <div class="text-center" style="margin-bottom: 64px;">
                    <h1 class="home-title">Clean & Green Energy Portfolio</h1>
                    <p class="home-description">
                        Exploring sustainable energy solutions for a cleaner future.
                        This portfolio showcases three major renewable energy technologies
                        and their applications in modern power generation.
                    </p>
                </div>

                <div class="grid-3">
                    <div class="card" style="background: #f0f9ff; border-color: #bae6fd;" onclick="navigateTo('activity1')">
                        <svg class="card-icon" style="stroke: #0284c7;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                        </svg>
                        <h3 class="card-title">Wave & Wind Energy</h3>
                        <p class="card-description">
                            Harnessing the power of ocean waves and wind currents to generate clean electricity
                        </p>
                        <div class="explore-link">
                            Explore
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </div>
                    </div>

                    <div class="card" style="background: #f0fdf4; border-color: #bbf7d0;" onclick="navigateTo('activity2')">
                        <svg class="card-icon" style="stroke: #16a34a;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20m0-20a8 8 0 0 1 0 16m0-16a8 8 0 0 0 0 16"/>
                        </svg>
                        <h3 class="card-title">Biomass Energy</h3>
                        <p class="card-description">
                            Converting organic materials into sustainable energy through various biological processes
                        </p>
                        <div class="explore-link">
                            Explore
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </div>
                    </div>

                    <div class="card" style="background: #fff7ed; border-color: #fed7aa;" onclick="navigateTo('activity3')">
                        <svg class="card-icon" style="stroke: #ea580c;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                        </svg>
                        <h3 class="card-title">Geothermal & OTEC</h3>
                        <p class="card-description">
                            Utilizing Earth's internal heat and ocean thermal gradients for power generation
                        </p>
                        <div class="explore-link">
                            Explore
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">About This Portfolio</h2>
                    <p>
                        This portfolio presents a comprehensive analysis of three renewable energy systems.
                        Each activity includes detailed block diagrams, energy conversion processes,
                        and real-world applications. Navigate through the menu to explore how these
                        technologies contribute to sustainable energy production and environmental conservation.
                    </p>
                </div>
            </div>
        </div>
    `,

    activity1: `
        <div class="page" style="background: linear-gradient(135deg, #f0f9ff 0%, #fff 50%, #dbeafe 100%);">
            <div class="page-inner">
                <div class="page-header">
                    <h1 class="page-title">Activity 1: Wave & Wind Energy</h1>
                    <p class="page-description">Harnessing the power of ocean waves and wind for sustainable electricity generation</p>
                </div>

                <div class="section">
                    <h2 class="section-title">System Block Diagram</h2>
                    <div class="block-diagram">
                        <div style="text-align: center; font-weight: 700; margin-bottom: 16px; color: #1f2937;">Wave Energy System</div>
                        <div class="diagram-row">
                            <div class="diagram-box" style="border-color: #0ea5e9;">
                                <div class="diagram-box-title">Wave Energy Source</div>
                                <div class="diagram-box-subtitle">Ocean Waves</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #0ea5e9;">
                                <div class="diagram-box-title">Energy Capture</div>
                                <div class="diagram-box-subtitle">Wave Energy Converter</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #0ea5e9;">
                                <div class="diagram-box-title">Conversion</div>
                                <div class="diagram-box-subtitle">Generator</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #0ea5e9;">
                                <div class="diagram-box-title">Output</div>
                                <div class="diagram-box-subtitle">Electricity</div>
                            </div>
                        </div>

                        <div style="text-align: center; font-weight: 700; margin: 32px 0 16px; color: #1f2937;">Wind Energy System</div>
                        <div class="diagram-row" style="margin-bottom: 0;">
                            <div class="diagram-box" style="border-color: #3b82f6;">
                                <div class="diagram-box-title">Wind Energy Source</div>
                                <div class="diagram-box-subtitle">Wind Flow</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #3b82f6;">
                                <div class="diagram-box-title">Energy Capture</div>
                                <div class="diagram-box-subtitle">Wind Turbine</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #3b82f6;">
                                <div class="diagram-box-title">Conversion</div>
                                <div class="diagram-box-subtitle">Generator</div>
                            </div>
                            <div class="diagram-arrow">→</div>
                            <div class="diagram-box" style="border-color: #3b82f6;">
                                <div class="diagram-box-title">Output</div>
                                <div class="diagram-box-subtitle">Electricity</div>
                            </div>
                        </div>
                    </div>

                    <h3>Block Diagram Explanation</h3>
                    <p>
                        The system consists of two parallel energy generation pathways. The wave energy system captures
                        kinetic and potential energy from ocean waves using specialized converters that transform wave
                        motion into mechanical energy, which is then converted to electricity through generators.
                        The wind energy system captures kinetic energy from moving air masses, where wind turbine blades
                        rotate a shaft connected to a generator, producing electrical power. Both systems ultimately
                        feed electricity into the power grid.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Source of Energy</h2>
                    <div class="grid-2">
                        <div>
                            <img src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Ocean waves">
                            <h3>Wave Energy</h3>
                            <p>
                                Ocean waves are created by wind transferring energy to the water surface. This energy originates
                                from solar heating causing atmospheric pressure differences and wind patterns. Waves carry both
                                kinetic energy from water movement and potential energy from water elevation changes. The global
                                wave energy resource is estimated at 2 terawatts of power, making it a significant renewable source.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Wind turbines">
                            <h3>Wind Energy</h3>
                            <p>
                                Wind is the movement of air caused by differences in atmospheric pressure due to uneven solar
                                heating of Earth's surface. As air moves from high to low pressure areas, it creates kinetic
                                energy that can be captured. Wind energy is abundant, renewable, and available worldwide.
                                Coastal and offshore areas often have stronger and more consistent wind patterns, making them
                                ideal for wind energy generation.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Conversion Process</h2>

                    <img src="https://images.pexels.com/photos/1838981/pexels-photo-1838981.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Wave energy converter">
                    <h3>Wave Energy Conversion</h3>
                    <p>
                        Wave energy converters use various mechanisms to capture wave power. Point absorber devices
                        float on the surface and move with wave motion, driving hydraulic pumps or linear generators.
                        Oscillating water column devices trap air above water in a chamber; as waves rise and fall,
                        they force air through a turbine. Attenuator devices are long floating structures aligned
                        with waves that flex at joints, driving hydraulic pumps.
                    </p>
                    <p>
                        The mechanical energy is converted to electricity through generators. Power take-off systems
                        may use hydraulic fluid under pressure to drive motors, or direct mechanical coupling to generators.
                        The electricity is then conditioned to match grid requirements through power electronics.
                    </p>

                    <img src="https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Wind turbine">
                    <h3>Wind Energy Conversion</h3>
                    <p>
                        Wind turbines convert kinetic energy from wind into mechanical rotational energy. The aerodynamic
                        blades are designed to maximize lift force, similar to aircraft wings. As wind flows across the
                        blade surface, it creates a pressure difference that causes rotation. Modern turbines use three-blade
                        designs for optimal efficiency and stability.
                    </p>
                    <p>
                        The rotor shaft connects to a gearbox that increases rotational speed to levels suitable for
                        electricity generation. The high-speed shaft drives a generator where electromagnetic induction
                        produces alternating current. Power electronics convert and condition the electricity to match
                        grid frequency and voltage specifications. Typical conversion efficiency ranges from 35-45% of
                        available wind energy.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Utilization</h2>
                    <img src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Wind farm">
                    <p>
                        The generated electricity is integrated into the power grid through substations and transmission
                        lines. Grid integration requires careful management of variable power output using energy storage
                        systems, forecasting tools, and load balancing. The electricity serves diverse applications:
                    </p>
                    <div class="grid-2">
                        <div class="highlight-box" style="background: #f0f9ff; border-color: #0ea5e9;">
                            <h4>Residential Use</h4>
                            <p style="font-size: 14px;">
                                Powers homes for lighting, heating, cooling, and appliances. Coastal communities can become
                                self-sufficient in energy with local wave and wind installations.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0f9ff; border-color: #0ea5e9;">
                            <h4>Industrial Applications</h4>
                            <p style="font-size: 14px;">
                                Supplies energy-intensive industries like manufacturing, desalination plants, and data centers.
                                Large-scale installations can power entire industrial zones.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0f9ff; border-color: #0ea5e9;">
                            <h4>Commercial Buildings</h4>
                            <p style="font-size: 14px;">
                                Provides power for offices, shopping centers, and public facilities. Reduces operational costs
                                and carbon footprint for businesses.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0f9ff; border-color: #0ea5e9;">
                            <h4>Grid Stability</h4>
                            <p style="font-size: 14px;">
                                Contributes to grid diversity and resilience. When combined with storage, provides reliable
                                baseload and peak power capacity.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Real-World Application Relevance</h2>
                    <img src="https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Offshore wind farm">

                    <h3>Current Global Deployment</h3>
                    <p>
                        Wind energy has become one of the fastest-growing renewable sources globally. Countries like
                        Denmark generate over 50% of their electricity from wind. China, USA, and Germany lead in
                        total installed capacity with hundreds of gigawatts. Offshore wind farms are expanding rapidly,
                        offering higher capacity factors than onshore installations.
                    </p>

                    <h3>Wave Energy Projects</h3>
                    <p>
                        While less mature than wind technology, wave energy projects are operational in Portugal,
                        Scotland, Australia, and the USA. The European Marine Energy Centre in Orkney tests various
                        wave energy converters. Commercial-scale projects demonstrate viability, with continued
                        research focused on improving efficiency and reducing costs.
                    </p>

                    <h3>Environmental Benefits</h3>
                    <p>
                        These technologies produce zero direct emissions during operation, significantly reducing
                        carbon footprint compared to fossil fuels. A single offshore wind turbine can power thousands
                        of homes while offsetting hundreds of tons of CO₂ annually. Marine energy has minimal visual
                        impact and can coexist with marine ecosystems when properly designed.
                    </p>

                    <h3>Economic Impact</h3>
                    <p>
                        The wind energy sector employs over 1.2 million people worldwide. Coastal communities benefit
                        from wave energy development through job creation and energy independence. Costs have decreased
                        dramatically, with wind energy now competitive with conventional sources in many regions. This
                        makes it economically viable for developing nations to adopt clean energy.
                    </p>

                    <h3>Future Potential</h3>
                    <p>
                        Technological advances continue to improve efficiency and reduce costs. Floating offshore wind
                        platforms can access deeper waters with stronger, more consistent winds. Integration with
                        hydrogen production and energy storage systems enhances grid reliability. The combined potential
                        of wave and wind energy could meet a significant portion of global electricity demand sustainably.
                    </p>
                </div>
            </div>
        </div>
        <div class="section faq-section">
<h2 class="section-title">Frequently Asked Questions (FAQs)</h2>
<div class="faq-item">
<div class="faq-question">1. How efficient are wind and wave energy systems?</div>
<div class="faq-answer">Modern wind turbines convert 35–45% of wind’s kinetic energy into electricity, while wave systems achieve 25–40% efficiency depending on technology and conditions.</div>
</div>
<div class="faq-item">
<div class="faq-question">2. What are the main challenges of wave energy technology?</div>
<div class="faq-answer">High installation costs, corrosion from seawater, and maintenance in rough ocean conditions are key challenges currently being addressed by new designs.</div>
</div>
<div class="faq-item">
<div class="faq-question">3. Can wind and wave farms coexist in the same area?</div>
<div class="faq-answer">Yes. Offshore hybrid farms use the same sea space and grid infrastructure, improving efficiency and energy stability by combining wind and wave systems.</div>
</div>
</div>
    `,

    activity2: `
        <div class="page" style="background: linear-gradient(135deg, #f0fdf4 0%, #fff 50%, #d1fae5 100%);">
            <div class="page-inner">
                <div class="page-header">
                    <h1 class="page-title">Activity 2: Biomass Energy</h1>
                    <p class="page-description">Converting organic materials into sustainable energy through biological and thermal processes</p>
                </div>

                <div class="section">
                    <h2 class="section-title">System Block Diagram</h2>
                    <div class="block-diagram" style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);">
                        <div class="diagram-row">
                            <div class="diagram-box" style="border-color: #16a34a;">
                                <div class="diagram-box-title">Biomass Source</div>
                                <div class="diagram-box-subtitle">Organic Materials</div>
                            </div>
                            <div class="diagram-arrow" style="color: #16a34a;">→</div>
                            <div class="diagram-box" style="border-color: #16a34a;">
                                <div class="diagram-box-title">Pre-treatment</div>
                                <div class="diagram-box-subtitle">Collection & Processing</div>
                            </div>
                            <div class="diagram-arrow" style="color: #16a34a;">→</div>
                            <div class="diagram-box" style="border-color: #16a34a;">
                                <div class="diagram-box-title">Conversion Process</div>
                                <div class="diagram-box-subtitle">Thermal/Biological</div>
                            </div>
                            <div class="diagram-arrow" style="color: #16a34a;">→</div>
                            <div class="diagram-box" style="border-color: #16a34a;">
                                <div class="diagram-box-title">Energy Output</div>
                                <div class="diagram-box-subtitle">Heat/Electricity/Fuel</div>
                            </div>
                        </div>
                        <div style="text-align: center; font-size: 32px; font-weight: 700; color: #16a34a; margin: 16px 0;">↓</div>
                        <div class="diagram-row" style="margin-bottom: 0; justify-content: center;">
                            <div class="diagram-box" style="border-color: #059669; max-width: 400px;">
                                <div class="diagram-box-title">By-products Management</div>
                                <div class="diagram-box-subtitle">Ash, Biochar, Digestate for Fertilizer</div>
                            </div>
                        </div>
                    </div>

                    <h3>Block Diagram Explanation</h3>
                    <p>
                        The biomass energy system begins with collecting organic materials from various sources including
                        agricultural residues, forestry waste, energy crops, and municipal organic waste. These materials
                        undergo pre-treatment such as drying, sizing, and densification to optimize conversion efficiency.
                        The processed biomass then enters conversion systems which can be thermal (combustion, gasification,
                        pyrolysis) or biological (anaerobic digestion, fermentation). The conversion produces useful energy
                        in forms of heat, electricity, or biofuels. Additionally, the process generates valuable by-products
                        like biochar and fertilizer, creating a circular economy approach.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Source of Energy</h2>
                    <img src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Agricultural biomass">

                    <div class="grid-2">
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Agricultural Residues</h3>
                            <p style="font-size: 14px;">
                                Crop residues like rice husks, wheat straw, corn stalks, and sugarcane bagasse contain stored
                                solar energy from photosynthesis. These materials are abundant after harvest and would otherwise
                                be burned or decompose, releasing carbon dioxide.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Forestry Waste</h3>
                            <p style="font-size: 14px;">
                                Wood chips, sawdust, bark, and logging residues from sustainable forest management provide
                                high-energy biomass. These materials have concentrated chemical energy in cellulose and lignin
                                structures.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Energy Crops</h3>
                            <p style="font-size: 14px;">
                                Dedicated energy crops like switchgrass, miscanthus, and fast-growing trees are cultivated
                                specifically for energy production. These plants efficiently convert solar energy into biomass
                                through photosynthesis.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Organic Waste</h3>
                            <p style="font-size: 14px;">
                                Municipal solid waste, food processing waste, and animal manure contain chemical energy.
                                Converting waste to energy provides dual benefits of waste management and power generation.
                            </p>
                        </div>
                    </div>

                    <p>
                        All biomass sources derive their energy originally from the sun through photosynthesis, where plants
                        convert solar energy into chemical bonds within organic molecules. This stored energy can be released
                        through various conversion processes. Biomass is considered renewable because new plants can be grown
                        to replace those harvested, creating a sustainable cycle when managed properly.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Conversion Process</h2>

                    <img src="https://images.pexels.com/photos/3411107/pexels-photo-3411107.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Biomass combustion">
                    <h3>Thermal Conversion Methods</h3>

                    <div class="highlight-box" style="background: #fef3c7; border-color: #fcd34d;">
                        <h4>Direct Combustion</h4>
                        <p style="font-size: 14px;">
                            Biomass is burned in boilers to produce high-temperature heat. This heat converts water to
                            steam under high pressure, which drives turbines connected to generators. Modern combustion
                            systems achieve 25-40% electrical efficiency. The process releases stored chemical energy
                            as thermal energy through oxidation reactions.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fef3c7; border-color: #fcd34d;">
                        <h4>Gasification</h4>
                        <p style="font-size: 14px;">
                            Biomass is heated in a controlled low-oxygen environment at 700-1000°C, converting solid biomass
                            into synthesis gas (syngas) containing hydrogen, carbon monoxide, and methane. This gas can fuel
                            engines or turbines for electricity generation, or be processed into liquid fuels. Gasification
                            offers higher efficiency than direct combustion.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fef3c7; border-color: #fcd34d;">
                        <h4>Pyrolysis</h4>
                        <p style="font-size: 14px;">
                            Biomass undergoes thermal decomposition in complete absence of oxygen at 400-600°C. This produces
                            bio-oil, biochar, and syngas. Bio-oil can be refined into transportation fuels, biochar serves as
                            a soil amendment and carbon sequestration tool, and syngas generates electricity. This process
                            creates multiple valuable products from a single feedstock.
                        </p>
                    </div>

                    <img src="https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Biogas digestion">
                    <h3>Biological Conversion Methods</h3>

                    <div class="highlight-box" style="background: #d1fae5; border-color: #6ee7b7;">
                        <h4>Anaerobic Digestion</h4>
                        <p style="font-size: 14px;">
                            Microorganisms break down organic matter in oxygen-free conditions, producing biogas
                            (60-70% methane, 30-40% CO₂). The process occurs in sealed digesters at controlled temperatures.
                            Biogas can directly fuel generators for electricity or be upgraded to biomethane for injection
                            into natural gas grids. The remaining digestate is nutrient-rich fertilizer. This method works
                            well with wet biomass like animal manure and food waste.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #d1fae5; border-color: #6ee7b7;">
                        <h4>Fermentation</h4>
                        <p style="font-size: 14px;">
                            Sugars and starches from biomass are converted to ethanol by yeast or bacteria in controlled
                            conditions. The biomass is first broken down enzymatically to release fermentable sugars.
                            After fermentation, ethanol is separated through distillation. This bioethanol serves as
                            transportation fuel, blended with gasoline or used pure. Advanced processes can ferment
                            cellulosic materials, expanding feedstock options beyond food crops.
                        </p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Utilization</h2>
                    <img src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Biomass power plant">

                    <div class="grid-3">
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Electricity Generation</h3>
                            <p style="font-size: 14px;">
                                Biomass power plants generate baseload electricity for grid distribution. Combined heat and power
                                (CHP) systems simultaneously produce electricity and useful heat, achieving 80-90% overall efficiency.
                                Suitable for industrial facilities, district heating, and communities.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Transportation Fuels</h3>
                            <p style="font-size: 14px;">
                                Bioethanol and biodiesel replace fossil fuels in vehicles, reducing transportation emissions.
                                Aviation biofuels are emerging for aircraft. Drop-in fuels compatible with existing infrastructure
                                enable transition without vehicle modifications.
                            </p>
                        </div>
                        <div class="highlight-box" style="background: #f0fdf4; border-color: #86efac;">
                            <h3>Heating Applications</h3>
                            <p style="font-size: 14px;">
                                Biomass provides space heating for residential, commercial, and industrial buildings. Wood pellet
                                stoves, district heating systems, and industrial process heat applications reduce reliance on
                                fossil fuels while utilizing local resources.
                            </p>
                        </div>
                    </div>

                    <div class="highlight-box" style="background: #d1fae5; border-color: #6ee7b7; margin-top: 24px;">
                        <h3>Industrial Applications</h3>
                        <p>
                            Industries use biomass energy for process heat in manufacturing, drying operations in agriculture,
                            and steam generation in chemical production. Sugar mills, pulp and paper facilities, and food
                            processing plants often generate their own power from waste biomass, achieving energy independence
                            and cost savings.
                        </p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Real-World Application Relevance</h2>
                    <img src="https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Sustainable biomass">

                    <h3>Global Deployment Status</h3>
                    <p>
                        Biomass currently provides about 10% of global primary energy supply, making it the largest
                        renewable energy source. Countries like Brazil derive significant transportation fuel from
                        sugarcane ethanol. Scandinavian nations extensively use biomass for heating and power. Developing
                        countries rely on biomass for cooking and heating, though modern efficient systems are gradually
                        replacing traditional methods.
                    </p>

                    <h3>Carbon Neutrality Potential</h3>
                    <p>
                        When managed sustainably, biomass energy is considered carbon neutral because the CO₂ released
                        during combustion equals what plants absorbed during growth. This creates a closed carbon cycle.
                        Using waste biomass that would otherwise decompose and release methane (a more potent greenhouse gas)
                        provides additional climate benefits. With carbon capture and storage, biomass energy can achieve
                        negative emissions, actively removing CO₂ from the atmosphere.
                    </p>

                    <h3>Waste Management Integration</h3>
                    <p>
                        Biomass energy systems solve waste management challenges while generating power. Municipal solid
                        waste facilities reduce landfill burden by 90% while producing electricity. Agricultural operations
                        convert animal waste to biogas, eliminating odors and water pollution while generating income.
                        Food processing industries utilize waste streams for energy, improving profitability and sustainability.
                    </p>

                    <h3>Rural Development Impact</h3>
                    <p>
                        Biomass energy creates employment in rural areas through feedstock production, collection, and
                        processing. Small-scale biogas systems provide energy access to remote communities lacking grid
                        connection. Local energy production reduces energy costs and keeps revenue within communities.
                        Agricultural regions benefit from additional income streams while improving waste management.
                    </p>

                    <h3>Future Developments</h3>
                    <p>
                        Advanced technologies like cellulosic ethanol production, algae biofuels, and integrated
                        biorefinery concepts are expanding biomass potential. Research focuses on improving conversion
                        efficiency, reducing costs, and utilizing diverse feedstocks. Integration with other renewable
                        systems creates hybrid solutions for reliable power supply. Sustainable biomass management
                        practices ensure long-term viability without competing with food production or causing deforestation.
                    </p>
                </div>
            </div>
        </div>
        <div class="section faq-section">
<h2 class="section-title">Frequently Asked Questions (FAQs)</h2>
<div class="faq-item">
<div class="faq-question">1. Is biomass energy really carbon neutral?</div>
<div class="faq-answer">When managed sustainably, the CO₂ emitted during biomass combustion equals what plants absorbed during growth, creating a closed carbon cycle. However, unsustainable sourcing can negate this benefit.</div>
</div>
<div class="faq-item">
<div class="faq-question">2. What are the main feedstocks for biomass energy?</div>
<div class="faq-answer">Common sources include agricultural residues, forestry waste, energy crops like switchgrass, and organic municipal waste.</div>
</div>
<div class="faq-item">
<div class="faq-question">3. How does biomass compare to solar and wind power?</div>
<div class="faq-answer">Unlike solar and wind, biomass provides reliable baseload energy and helps manage organic waste, though it has lower efficiency and higher land-use impact.</div>
</div>
</div>
    `,

    activity3: `
        <div class="page" style="background: linear-gradient(135deg, #fff7ed 0%, #fff 50%, #fed7aa 100%);">
            <div class="page-inner">
                <div class="page-header">
                    <h1 class="page-title">Activity 3: Geothermal Energy & OTEC</h1>
                    <p class="page-description">Harnessing Earth's internal heat and ocean thermal gradients for sustainable power generation</p>
                </div>

                <div class="section">
                    <h2 class="section-title">System Block Diagram</h2>
                    <div class="block-diagram" style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);">
                        <div style="text-align: center; font-weight: 700; margin-bottom: 16px; color: #1f2937;">Geothermal Energy System</div>
                        <div class="diagram-row">
                            <div class="diagram-box" style="border-color: #ea580c;">
                                <div class="diagram-box-title">Heat Source</div>
                                <div class="diagram-box-subtitle">Underground Reservoir</div>
                            </div>
                            <div class="diagram-arrow" style="color: #ea580c;">→</div>
                            <div class="diagram-box" style="border-color: #ea580c;">
                                <div class="diagram-box-title">Extraction</div>
                                <div class="diagram-box-subtitle">Production Well</div>
                            </div>
                            <div class="diagram-arrow" style="color: #ea580c;">→</div>
                            <div class="diagram-box" style="border-color: #ea580c;">
                                <div class="diagram-box-title">Conversion</div>
                                <div class="diagram-box-subtitle">Steam Turbine</div>
                            </div>
                            <div class="diagram-arrow" style="color: #ea580c;">→</div>
                            <div class="diagram-box" style="border-color: #ea580c;">
                                <div class="diagram-box-title">Output</div>
                                <div class="diagram-box-subtitle">Electricity</div>
                            </div>
                        </div>
                        <div style="text-align: center; font-size: 32px; font-weight: 700; color: #ea580c; margin: 16px 0;">↓</div>
                        <div class="diagram-row">
                            <div class="diagram-box" style="border-color: #ea580c; max-width: 300px;">
                                <div class="diagram-box-title">Reinjection</div>
                                <div class="diagram-box-subtitle">Return cooled fluid to reservoir</div>
                            </div>
                        </div>

                        <div style="text-align: center; font-weight: 700; margin: 32px 0 16px; color: #1f2937;">OTEC System</div>
                        <div class="diagram-row">
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Warm Surface Water</div>
                                <div class="diagram-box-subtitle">25-30°C</div>
                            </div>
                            <div class="diagram-arrow" style="color: #dc2626;">→</div>
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Heat Exchanger</div>
                                <div class="diagram-box-subtitle">Working Fluid Evaporation</div>
                            </div>
                            <div class="diagram-arrow" style="color: #dc2626;">→</div>
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Turbine</div>
                                <div class="diagram-box-subtitle">Vapor Expansion</div>
                            </div>
                            <div class="diagram-arrow" style="color: #dc2626;">→</div>
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Generator</div>
                                <div class="diagram-box-subtitle">Electricity</div>
                            </div>
                        </div>
                        <div class="diagram-row" style="margin-bottom: 0;">
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Cold Deep Water</div>
                                <div class="diagram-box-subtitle">4-7°C (1000m depth)</div>
                            </div>
                            <div class="diagram-arrow" style="color: #dc2626;">→</div>
                            <div class="diagram-box" style="border-color: #dc2626;">
                                <div class="diagram-box-title">Condenser</div>
                                <div class="diagram-box-subtitle">Working Fluid Condensation</div>
                            </div>
                        </div>
                    </div>

                    <h3>Block Diagram Explanation</h3>
                    <p>
                        <strong>Geothermal System:</strong> Hot water or steam from underground reservoirs is extracted through
                        production wells. The thermal energy drives turbines connected to generators, producing electricity.
                        The cooled fluid is reinjected into the reservoir to maintain pressure and sustainability, creating
                        a closed-loop system.
                    </p>
                    <p>
                        <strong>OTEC System:</strong> Ocean Thermal Energy Conversion exploits temperature differences between
                        warm surface water and cold deep ocean water. Warm water evaporates a low-boiling-point working fluid
                        in a heat exchanger. The vapor drives a turbine-generator. Cold water from ocean depths
                        condenses the vapor back to liquid in a condenser, completing the thermodynamic cycle.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Source of Energy</h2>

                    <img src="https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Geothermal volcanic landscape">
                    <h3>Geothermal Energy Source</h3>
                    <p>
                        Earth's interior contains tremendous heat from two primary sources. Primordial heat remains from
                        planetary formation 4.5 billion years ago, when gravitational compression and collisions generated
                        extreme temperatures. Additionally, radioactive decay of isotopes like uranium, thorium, and potassium
                        in Earth's mantle and crust continuously produces heat.
                    </p>
                    <p>
                        The core temperature reaches 5,000-7,000°C, comparable to the sun's surface. This heat gradually
                        transfers outward through the mantle and crust by conduction and convection. In certain locations,
                        geological conditions bring hot rock closer to the surface, creating geothermal reservoirs. These
                        occur particularly at tectonic plate boundaries, volcanic regions, and areas with fractured rock
                        allowing water circulation.
                    </p>

                    <img src="https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Ocean thermal layers">
                    <h3>OTEC Energy Source</h3>
                    <p>
                        Ocean Thermal Energy Conversion relies on the natural temperature stratification in tropical oceans.
                        Solar radiation heats the ocean surface layer, creating temperatures of 25-30°C in tropical regions.
                        At depths of 1,000 meters, ocean water maintains a stable temperature of 4-7°C year-round. This cold water originates from polar regions, sinking due to higher density and flowing
                        toward the equator along the ocean floor. The temperature difference of 20°C or more between surface
                        and deep water represents a vast, continuously renewed energy resource.
                    </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Conversion Process</h2>

                    <img src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Geothermal power plant">
                    <h3>Geothermal Conversion Technologies</h3>

                    <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74;">
                        <h4>Dry Steam Power Plants</h4>
                        <p style="font-size: 14px;">
                            Used when the reservoir contains steam at 150°C or higher. Steam is extracted directly from
                            production wells and piped to turbines. After driving the turbine, steam passes through a
                            condenser where cooling water converts it back to liquid. The condensate is reinjected into
                            the reservoir. These plants achieve 10-20% thermal efficiency.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74;">
                        <h4>Flash Steam Power Plants</h4>
                        <p style="font-size: 14px;">
                            Most common type, used when reservoir fluid exceeds 182°C under pressure. Hot water is pumped
                            from deep underground where high pressure keeps it liquid. When it reaches lower pressure at
                            the surface, it rapidly boils or "flashes" into steam. This steam drives turbines while remaining
                            liquid water and condensed steam are reinjected.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74;">
                        <h4>Binary Cycle Power Plants</h4>
                        <p style="font-size: 14px;">
                            Suitable for moderate temperature resources (85-175°C). Hot geothermal fluid passes through a
                            heat exchanger, transferring heat to a secondary working fluid with a low boiling point. This working fluid vaporizes and drives the turbine. Binary plants can utilize lower temperature resources, expanding
                            viable geothermal locations.
                        </p>
                    </div>

                    <img src="https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Ocean water">
                    <h3>OTEC Conversion Methods</h3>

                    <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5;">
                        <h4>Closed-Cycle OTEC</h4>
                        <p style="font-size: 14px;">
                            Uses a working fluid with low boiling point like ammonia in a closed loop. Warm surface
                            seawater flows through an evaporator heat exchanger, providing heat to vaporize the working fluid.
                            The high-pressure vapor drives a turbine-generator. Cold deep ocean water pumped from 1,000m depth
                            flows through a condenser, cooling and condensing the vapor back to liquid. This is the most developed OTEC approach, with
                            efficiency around 3-4%.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5;">
                        <h4>Open-Cycle OTEC</h4>
                        <p style="font-size: 14px;">
                            Uses seawater itself as the working fluid. Warm surface water is flash-evaporated in a low-pressure
                            chamber (vacuum), producing steam. This steam drives a low-pressure turbine. Cold deep water
                            condenses the steam. The condensed steam is fresh water suitable
                            for drinking or agriculture, adding economic value beyond electricity generation.
                        </p>
                    </div>

                    <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5;">
                        <h4>Hybrid-Cycle OTEC</h4>
                        <p style="font-size: 14px;">
                            Combines features of both closed and open cycles. Warm seawater is flash-evaporated, and the steam passes through a heat exchanger to vaporize a working fluid. This working fluid vapor drives the turbine. Cold seawater condenses both the working fluid and
                            the seawater steam, producing fresh water. This design maximizes both electricity and fresh water
                            production.
                        </p>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Utilization</h2>

                    <div class="grid-2">
                        <div>
                            <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Power distribution">
                            <h3>Geothermal Applications</h3>

                            <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74; margin-bottom: 12px;">
                                <h4>Electricity Generation</h4>
                                <p style="font-size: 14px;">
                                    Baseload power for grid supply with 90%+ capacity factor. Single plants can generate 50-200 MW,
                                    operating continuously without fuel costs.
                                </p>
                            </div>

                            <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74; margin-bottom: 12px;">
                                <h4>District Heating</h4>
                                <p style="font-size: 14px;">
                                    Low-temperature geothermal resources provide space heating for entire communities through
                                    underground pipe networks, eliminating heating fuel needs.
                                </p>
                            </div>

                            <div class="highlight-box" style="background: #fff7ed; border-color: #fdba74;">
                                <h4>Industrial Processes</h4>
                                <p style="font-size: 14px;">
                                    Direct use of geothermal heat for food drying, mineral extraction, and manufacturing.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Island energy">
                            <h3>OTEC Applications</h3>

                            <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5; margin-bottom: 12px;">
                                <h4>Island Power Supply</h4>
                                <p style="font-size: 14px;">
                                    Baseload electricity for tropical islands and coastal communities, eliminating expensive diesel
                                    fuel imports and providing energy independence.
                                </p>
                            </div>

                            <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5; margin-bottom: 12px;">
                                <h4>Desalinated Water</h4>
                                <p style="font-size: 14px;">
                                    Fresh water generated as by-product addresses water scarcity in arid coastal regions, providing
                                    both energy and water security.
                                </p>
                            </div>

                            <div class="highlight-box" style="background: #fee2e2; border-color: #fca5a5;">
                                <h4>Aquaculture</h4>
                                <p style="font-size: 14px;">
                                    Nutrient-rich cold deep water supports fish farming and seaweed cultivation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Real-World Application Relevance</h2>
                    <img src="https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Geothermal facility">

                    <h3>Geothermal Global Deployment</h3>
                    <p>
                        Over 90 countries utilize geothermal energy, with 16 GW of installed electricity capacity worldwide.
                        The United States leads in power generation with 3.7 GW, followed by Indonesia, Philippines, Turkey,
                        and New Zealand. Iceland derives 90% of its heating and hot water from geothermal sources,
                        demonstrating the technology's potential. Kenya generates 45% of its electricity from geothermal.
                    </p>

                    <h3>OTEC Development Status</h3>
                    <p>
                        While OTEC technology is proven, commercial deployment has been limited. Japan, USA, and India
                        have operated experimental OTEC plants demonstrating feasibility. Japan's 100 kW facility in
                        Kumejima has operated continuously, producing electricity and desalinated water. Recent economic analyses show OTEC
                        becoming cost-competitive as the technology scales up to 10-100 MW plants.
                    </p>

                    <h3>Environmental Benefits</h3>
                    <p>
                        Geothermal and OTEC systems produce minimal emissions compared to fossil fuels. Geothermal plants
                        emit 5-10% of the CO₂ per kWh compared to coal plants. Small land footprint means minimal environmental disruption.
                        OTEC has essentially zero emissions and provides marine ecosystem benefits by bringing nutrient-rich
                        deep water to the surface. Both technologies provide reliable baseload
                        power, reducing need for fossil fuel backup systems.
                    </p>

                    <h3>Economic Advantages</h3>
                    <p>
                        High upfront costs are offset by extremely low operating costs and no fuel expenses. Geothermal
                        plants operate 90-95% of the time versus 30% for solar and wind. District heating
                        systems provide heating at half the cost of oil or gas. OTEC offers multiple revenue streams from
                        electricity, fresh water, aquaculture, and cooling services.
                    </p>

                    <h3>Energy Security and Resilience</h3>
                    <p>
                        Geothermal and OTEC provide domestic energy resources, reducing dependence on imported fuels.
                        Systems are highly reliable and unaffected by weather, providing stable power supply. For island
                        nations spending 20-30% of GDP on imported diesel fuel, these technologies offer economic liberation.
                    </p>

                    <h3>Future Potential and Innovation</h3>
                    <p>
                        Enhanced Geothermal Systems could access heat resources beneath any location, potentially
                        providing terawatts of power globally. OTEC technology improvements focus on reducing costs
                        through materials innovation and scaling up plant size. Integration with hydrogen production creates carbon-free fuel. As technology matures, both geothermal and OTEC are positioned
                        to play major roles in global clean energy transition.
                    </p>
                </div>
            </div>
        </div>
        <div class="section faq-section">
<h2 class="section-title">Frequently Asked Questions (FAQs)</h2>
<div class="faq-item">
<div class="faq-question">1. How sustainable is geothermal energy in the long term?</div>
<div class="faq-answer">Geothermal energy is highly sustainable if managed properly, with reinjection of fluids maintaining reservoir pressure and heat over decades.</div>
</div>
<div class="faq-item">
<div class="faq-question">2. Why isn’t OTEC widely used yet?</div>
<div class="faq-answer">OTEC systems are still in early stages due to high infrastructure costs and engineering challenges in deep-water pipelines, but research continues toward commercialization.</div>
</div>
<div class="faq-item">
<div class="faq-question">3. Can these systems work together with other renewables?</div>
<div class="faq-answer">Yes. Geothermal and OTEC can integrate with solar or wind to provide consistent baseload power, enhancing overall grid reliability and renewable penetration.</div>
</div>
</div>
    `
};

function navigateTo(page) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const button = document.querySelector(`[data-page="${page}"]`);
    if (button) {
        button.classList.add('active');
    }

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = pages[page] || pages.home;

    mainContent.scrollTop = 0;
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            navigateTo(page);
        });
    });

    navigateTo('home');
});
